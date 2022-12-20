package com.example.cosmeticmanagementbe.service;

import com.example.cosmeticmanagementbe.dto.ICartDto;
import com.example.cosmeticmanagementbe.dto.IProductDto;
import com.example.cosmeticmanagementbe.dto.ITotalDto;
import com.example.cosmeticmanagementbe.model.Cart;
import com.example.cosmeticmanagementbe.model.Product;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface ICartService {
    List<ICartDto> getCartList(Integer cartId);

    Cart findCartByUsername(String username);
    ITotalDto getTotalBill(Integer cart_id);
    void updateCosmeticCart(Integer id);
    void insertProductToCart(Integer id, Integer cart_id);
    void updateQty(Integer id, Integer qty, Integer cartId);
    void deleteProduct(Integer id);
    IProductDto findById(Integer id, String username);

}
