package com.cpl.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cpl.app.entities.User;
import com.cpl.app.repository.UserDetailsRepository;
import com.cpl.app.services.UserService;


import payload.Register;

@RestController
@RequestMapping(value = "/jumpstart")
@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {
	
	@Autowired
	private UserDetailsRepository userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value = "/register")
	public void registerUser(@RequestBody Register register){
		
		User users = new User();
		users.setUserName(register.getUserName());
		users.setFirstName(register.getFirstName());
		users.setLastName(register.getLastName());
		users.setEmail(register.getEmail());
		users.setRole("USER");
		users.setJoinedOn(register.getJoinedOn());
		users.setPassword(register.getPassword());
		users.setPassword(passwordEncoder.encode(users.getPassword()));
		users.setPhoneNumber(register.getPhoneNumber());
		userService.addEmployee(users);
		System.out.println("Successfull Register");
			
		
		
	}

}
