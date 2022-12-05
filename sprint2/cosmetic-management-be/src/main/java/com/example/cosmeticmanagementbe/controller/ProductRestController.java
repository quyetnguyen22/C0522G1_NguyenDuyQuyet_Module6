package com.example.cosmeticmanagementbe.controller;

import com.example.cosmeticmanagementbe.dto.ProductDto;
import com.example.cosmeticmanagementbe.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("api/product")
public class ProductRestController {

    @Autowired
    private IProductService productService;

    @GetMapping("/list")
    public ResponseEntity<Page<ProductDto>> getListProduct(@PageableDefault(value = 10) Pageable pageable) {
        Page<ProductDto> productDto = productService.getListProduct(pageable);
        if (productDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }
}
