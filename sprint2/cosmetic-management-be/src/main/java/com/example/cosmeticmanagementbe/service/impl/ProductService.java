package com.example.cosmeticmanagementbe.service.impl;

import com.example.cosmeticmanagementbe.dto.IProductDto;
import com.example.cosmeticmanagementbe.dto.ProductDto;
import com.example.cosmeticmanagementbe.model.Product;
import com.example.cosmeticmanagementbe.repository.IProductRepository;
import com.example.cosmeticmanagementbe.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepository;


    @Override
    public Page<IProductDto> getListProduct(String name, Pageable pageable) {
        return productRepository.getListProduct(name, pageable);
    }

    @Override
    public Page<IProductDto> getWomenProduct(String name, Pageable pageable) {
        return productRepository.getWomenProduct(name, pageable);
    }

    @Override
    public IProductDto getProductById(Integer id) {
        return productRepository.getProductById(id);
    }
}
