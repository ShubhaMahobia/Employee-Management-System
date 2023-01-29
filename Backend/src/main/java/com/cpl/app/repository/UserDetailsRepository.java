package com.cpl.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cpl.app.entities.User;


@Repository
public interface UserDetailsRepository extends JpaRepository<User, Long> {

	User findByUserName(String userName);
	
}
