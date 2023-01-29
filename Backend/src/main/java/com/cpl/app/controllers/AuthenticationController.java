package com.cpl.app.controllers;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cpl.app.config.JWTTokenHelper;
import com.cpl.app.entities.User;
import com.cpl.app.requests.AuthenticationRequest;
import com.cpl.app.responses.LoginResponse;
import com.cpl.app.responses.UserInfo;
import com.cpl.app.services.UserService;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {
	

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	JWTTokenHelper jWTTokenHelper;
	
	@Autowired
	private UserDetailsService userDetailsService;

	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {

		final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
				authenticationRequest.getUserName(), authenticationRequest.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		User user=(User)authentication.getPrincipal();
		String jwtToken=jWTTokenHelper.generateToken(user.getUsername());
		
		if(user.getUsername()=="shubham0403") {
			LoginResponse response=new LoginResponse();
			response.setToken(jwtToken);
			System.out.println("Logged in as Admin");
			return ResponseEntity.ok(response);
		}
		else {
		LoginResponse response=new LoginResponse();
		response.setToken(jwtToken);
		System.out.println("Logged in as User");
		return ResponseEntity.ok(response);
	}
		}
	
	@GetMapping("/auth/userinfo")
	public ResponseEntity<?> getUserInfo(Principal user){
		User userObj=(User) userDetailsService.loadUserByUsername(user.getName());
		
		UserInfo userInfo=new UserInfo();	
		userInfo.setFirstName(userObj.getFirstName());
		userInfo.setLastName(userObj.getLastName());
		userInfo.setRoles(userObj.getRole());
		userInfo.setUserName(userObj.getUserName());
		userInfo.setEmail(userObj.getEmail());
		userInfo.setJoinedOn(userObj.getJoinedOn());
		
		return ResponseEntity.ok(userInfo);
			
	}
	

}
