package com.raneemAlqarni.check_backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.raneemAlqarni.check_backend.domin.menu;

@Repository
public interface MenuRepository extends JpaRepository<menu, Integer> {
    List<menu> findByCategory(String category);
    long countByCategoryIgnoreCase(String category);

    @Query("SELECT DISTINCT m.category FROM menu m ORDER BY m.category ASC")
    List<String> findDistinctCategories();
}
