package com.cpl.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cpl.app.entities.User;
import com.cpl.app.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/jumpstart")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(value ="/viewUsers")
	public List<User> GetAllEmployee() {
		return userService.getAllEmployees();
	}
	
	@DeleteMapping(value="/delete/{userId}")
	public void deleteUser(@PathVariable int userId) {
		userService.deleteEmployee(userId);
	}
	
}
