package com.example.cosmeticmanagementbe.dto;

import com.example.cosmeticmanagementbe.model.Brand;
import com.example.cosmeticmanagementbe.model.CosmeticType;
import com.example.cosmeticmanagementbe.model.Producer;

public interface IProductDto {
    Integer getId();
    String getName();
    String getVolume();
    double getPrice();
    Integer getGender();
    String getDescription();
    String getUsingProduct();
    Producer getProducer();
    Brand getBrand();
    CosmeticType getCosmeticType();
    String getImageLink();
    Integer getCosmeticId();
}
