package com.example.cosmeticmanagementbe.dto;

public interface ICartDto {
    Integer getId();
    Integer getQty();
    double getPrice();
    double getSumPerOne();
    String getImage();
    String getName();

}
