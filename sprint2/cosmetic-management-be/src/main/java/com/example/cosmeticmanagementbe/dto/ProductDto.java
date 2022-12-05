package com.example.cosmeticmanagementbe.dto;

import com.example.cosmeticmanagementbe.model.Brand;
import com.example.cosmeticmanagementbe.model.CosmeticType;
import com.example.cosmeticmanagementbe.model.Producer;

public class ProductDto {

    Integer id;
    String name;
    boolean isDeleted;
    String volume;
    double price;
    Integer gender;

    String description;
    String usingProduct;

    Producer producer;

    Brand brand;

    CosmeticType cosmeticType;

    public ProductDto() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
