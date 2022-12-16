package com.example.cosmeticmanagementbe.service;

import com.example.cosmeticmanagementbe.dto.ICartDto;
import com.example.cosmeticmanagementbe.dto.ITotalDto;
import com.example.cosmeticmanagementbe.model.Cart;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface ICartService {
    List<ICartDto> getCartList();
    ITotalDto getTotalBill();
    void updateCart(Integer id);
    void insertToCart(Integer id);
    void updateQty(Integer id, Integer qty);
    void deleteProduct(Integer id);
    ICartDto findById(Integer id);

}
