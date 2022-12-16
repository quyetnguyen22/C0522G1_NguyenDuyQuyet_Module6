package com.example.cosmeticmanagementbe.service.impl;

import com.example.cosmeticmanagementbe.dto.ICartDto;
import com.example.cosmeticmanagementbe.dto.ITotalDto;
import com.example.cosmeticmanagementbe.repository.ICartRepo;
import com.example.cosmeticmanagementbe.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepo cartRepo;
    @Override
    public List<ICartDto> getCartList() {
        return cartRepo.getCartList();
    }

    @Override
    public ITotalDto getTotalBill() {
        return cartRepo.getTotalBill();
    }

    @Override
    public void updateCart(Integer id) {
        cartRepo.updateCart(id);
    }

    @Override
    public void insertToCart(Integer id) {
        cartRepo.insertToCart(id);
    }

    @Override
    public void updateQty(Integer id, Integer qty) {
        cartRepo.updateQty(id, qty);
    }

    @Override
    public void deleteProduct(Integer id) {
        cartRepo.deleteProduct(id);
    }

    @Override
    public ICartDto findById(Integer id) {
        return cartRepo.findByIdCosmetic(id);
    }
}
