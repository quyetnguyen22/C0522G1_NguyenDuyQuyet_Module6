package com.example.cosmeticmanagementbe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cosmetic")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String name;
    boolean isDeleted = false;
    String volume;
    double price;
    Integer gender;

    @Column(columnDefinition = "TEXT")
    String descriptions;
    @Column(columnDefinition = "TEXT")
    String usingProduct;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "producer_id", referencedColumnName = "id")
    Producer producer;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    Brand brand;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "cos_type_id", referencedColumnName = "id")
    CosmeticType cosmeticType;

//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "cart_id", referencedColumnName = "id")
//    Cart cart;

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

//    public Cart getCart() {
//        return cart;
//    }
//
//    public void setCart(Cart cart) {
//        this.cart = cart;
//    }
}
