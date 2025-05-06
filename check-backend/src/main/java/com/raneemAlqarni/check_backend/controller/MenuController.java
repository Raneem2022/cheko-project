package com.raneemAlqarni.check_backend.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.raneemAlqarni.check_backend.domin.menu;
import com.raneemAlqarni.check_backend.service.MenuService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*")

public class MenuController {
    private final MenuService menuService;

    public MenuController(MenuService menuService){
        this.menuService = menuService;
    }

    @GetMapping
    public List<menu> getAll(){
        return menuService.getAllMenuItems();
    }

    @GetMapping("/{id}")
    public menu getItemById(@PathVariable Integer itemId){
        return menuService.getMenuItemById(itemId);
    }

    @GetMapping("/category/{category}")
    public List<menu> getMenuByCategory(@PathVariable String category){
        return menuService.getMenuByCategory(category);
    }

    @GetMapping("/categories")
    public ResponseEntity<List<String>> getCategories() {
        List<String> categories = menuService.getAllDistinctCategories();

        if (categories.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.emptyList());
        }

        return ResponseEntity.ok(categories);
    }

    @GetMapping("/category/{categoryName}/count")
    public ResponseEntity<Long> getCountByCategory(@PathVariable String categoryName) {
        long count = menuService.countItemsByCategory(categoryName);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/search")
    public ResponseEntity<List<menu>> searchItems(@RequestParam String keyword) {
        List<menu> results = menuService.getMenuItemByName(keyword);
        return ResponseEntity.ok(results);
    }

    @GetMapping("/secondHighestCalorie")
    public ResponseEntity<Integer> secondHighestCalorie() {
        int results = menuService.findSecondHighestCalorie();
        return ResponseEntity.ok(results);
    }

}
