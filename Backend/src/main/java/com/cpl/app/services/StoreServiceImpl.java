package com.cpl.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpl.app.entities.Stores;
import com.cpl.app.repository.StoreRepository;


@Service
@Transactional
public class StoreServiceImpl implements StoreService {
	
	@Autowired
    private StoreRepository storeRepo;

	@Override
	public void addStore(Stores stores) {
		storeRepo.save(stores);
		System.out.println("Store added Successfully!!");
		
		
	}

	@Override
	public List<Stores> getAllStores() {
		List<Stores> stores = storeRepo.findAll();
        return stores;
	}

	@Override
	public void deleteStore(int id) {
		storeRepo.deleteById(id);
		System.out.print("Store Deleted Successfully!!");
		
	}

}
