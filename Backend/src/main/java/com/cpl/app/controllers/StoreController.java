package com.cpl.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cpl.app.entities.Stores;
import com.cpl.app.services.StoreService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/jumpstart")
public class StoreController {
	
	@Autowired
	private StoreService storeService;
	
	@PostMapping(value = "/addStore")
	public void postProduct(@RequestBody Stores stores) {
		storeService.addStore(stores);
		
	}
	
	@GetMapping(value ="/viewStore")
	public List<Stores> GetAllStores() {
		return storeService.getAllStores();
	}
	
	@DeleteMapping(value="/deleteStore/{storeId}")
	public void deleteStore(@PathVariable int storeId) {
		storeService.deleteStore(storeId);
	}

}
