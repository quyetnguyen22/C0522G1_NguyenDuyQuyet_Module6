package com.example.cosmeticmanagementbe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cosmetic")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private boolean isDeleted = false;
    private String volume;
    private double price;
    private Integer gender;

    @Column(columnDefinition = "TEXT")
    private String descriptions;
    @Column(columnDefinition = "TEXT")
    private String usingProduct;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "producer_id", referencedColumnName = "id")
    private Producer producer;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    private Brand brand;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "cos_type_id", referencedColumnName = "id")
    private CosmeticType cosmeticType;

    public Product() {
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

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public String getVolume() {
        return volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String description) {
        this.descriptions = descriptions;
    }

    public String getUsingProduct() {
        return usingProduct;
    }

    public void setUsingProduct(String usingProduct) {
        this.usingProduct = usingProduct;
    }

    public Producer getProducer() {
        return producer;
    }

    public void setProducer(Producer producer) {
        this.producer = producer;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public CosmeticType getCosmeticType() {
        return cosmeticType;
    }

    public void setCosmeticType(CosmeticType cosmeticType) {
        this.cosmeticType = cosmeticType;
    }
}
