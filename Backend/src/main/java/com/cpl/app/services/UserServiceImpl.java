package com.cpl.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cpl.app.entities.Stores;
import com.cpl.app.entities.User;
import com.cpl.app.repository.UserDetailsRepository;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	private PasswordEncoder passwordEncoder;
	@Autowired
	UserDetailsRepository userRepo;

	@Override
	public void addEmployee(User usr) {
		userRepo.save(usr);
	}

	@Override
	public List<User> getAllEmployees() {
		List<User> users = userRepo.findAll();
        return users;
	}

	@Override
	public void deleteEmployee(int id) {
		userRepo.deleteById((long) id);;
		
	}

	
	

}
