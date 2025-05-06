package com.raneemAlqarni.check_backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.raneemAlqarni.check_backend.domin.menu;
import com.raneemAlqarni.check_backend.repo.MenuRepository;

@Service
public class MenuService {
    private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository){
        this.menuRepository = menuRepository;
    }

    public List<menu> getAllMenuItems(){
        return menuRepository.findAll();
    }

    public menu getMenuItemById(Integer ItemId){
        return menuRepository.findById(ItemId).orElseThrow(() -> new RuntimeException("items Not found"));
    }

    public List<menu> getMenuItemByName(String name){
        return menuRepository.findByName(name);
    }

    public List<menu> getMenuByCategory(String category){
        return menuRepository.findByCategory(category);
    }

    public List<String> getAllDistinctCategories() {
        return menuRepository.findDistinctCategories();
    }

    public long countItemsByCategory(String category) {
        return menuRepository.countByCategoryIgnoreCase(category);
    }

    public int findSecondHighestCalorie() {
        return menuRepository.findSecondHighestCalorie();
    }
}
