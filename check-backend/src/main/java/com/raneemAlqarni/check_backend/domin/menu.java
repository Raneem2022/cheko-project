package com.raneemAlqarni.check_backend.domin;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "menu")
public class menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(length = 10000)
    private String description;
    private Double price;
    private String image;
    private Integer calorie;
    private String category;
    private Double lat;
    private Double lng;
}
