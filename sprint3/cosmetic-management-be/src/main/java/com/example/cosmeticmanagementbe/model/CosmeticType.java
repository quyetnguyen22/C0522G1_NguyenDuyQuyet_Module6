package com.example.cosmeticmanagementbe.model;

import javax.persistence.*;

@Entity
@Table(name = "cos_type")
public class CosmeticType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
     String name;

    public CosmeticType() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
