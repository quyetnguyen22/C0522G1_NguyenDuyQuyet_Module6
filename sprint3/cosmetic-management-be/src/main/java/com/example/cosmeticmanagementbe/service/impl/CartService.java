package com.example.cosmeticmanagementbe.service.impl;

import com.example.cosmeticmanagementbe.dto.ICartDto;
import com.example.cosmeticmanagementbe.dto.IProductDto;
import com.example.cosmeticmanagementbe.dto.ITotalDto;
import com.example.cosmeticmanagementbe.model.Cart;
import com.example.cosmeticmanagementbe.repository.ICartRepo;
import com.example.cosmeticmanagementbe.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepo cartRepo;
    @Override
    public List<ICartDto> getCartList(Integer cartId) {
        return cartRepo.getCartList(cartId);
    }

    @Override
    public Cart findCartByUsername(String username) {
        return cartRepo.findCartId(username);
    }

    @Override
    public ITotalDto getTotalBill(Integer cart_id) {
        return cartRepo.getTotalBill(cart_id);
    }

    @Override
    public void updateCosmeticCart(Integer id) {
        cartRepo.updateCosmeticCart(id);
    }

    @Override
    public void insertProductToCart(Integer id, Integer cart_id) {
        cartRepo.insertProductToCart(id, cart_id);
    }

    @Override
    public void updateQty(Integer id, Integer qty, Integer cartId) {
        cartRepo.updateQty(id, qty, cartId);
    }

    @Override
    public void deleteProduct(Integer id) {
        cartRepo.deleteProduct(id);
    }

    @Override
    public IProductDto findById(Integer id, String username) {
        return cartRepo.findByIdCosmetic(id, username);
    }
}
