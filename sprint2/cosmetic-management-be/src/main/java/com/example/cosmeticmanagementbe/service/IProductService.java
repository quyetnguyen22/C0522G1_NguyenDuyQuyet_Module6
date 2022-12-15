package com.example.cosmeticmanagementbe.service;


import com.example.cosmeticmanagementbe.dto.IProductDto;
import com.example.cosmeticmanagementbe.dto.ProductDto;
import com.example.cosmeticmanagementbe.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {

    Page<IProductDto> getListProduct(String name, Pageable pageable);

    Page<IProductDto> getWomenProduct(String name, Pageable pageable);
}
