package com.cpl.app.services;

import java.util.List;


import com.cpl.app.entities.User;

public interface UserService {
	
	public void addEmployee(User usr);
	public List<User> getAllEmployees();
	public void deleteEmployee(int id);
	

}
