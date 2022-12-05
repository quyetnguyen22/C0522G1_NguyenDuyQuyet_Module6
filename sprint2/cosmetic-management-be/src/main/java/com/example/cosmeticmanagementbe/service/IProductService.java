package com.example.cosmeticmanagementbe.service;


import com.example.cosmeticmanagementbe.dto.ProductDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {

    Page<ProductDto> getListProduct(Pageable pageable);
}
