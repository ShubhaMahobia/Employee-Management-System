package com.cpl.app.services;

import java.util.List;

import com.cpl.app.entities.Stores;



public interface StoreService {
	 public void addStore(Stores stores);
	 public List<Stores> getAllStores();
	 public void deleteStore(int id);


}
