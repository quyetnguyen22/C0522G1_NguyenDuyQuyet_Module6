package com.example.cosmeticmanagementbe.repository;

import com.example.cosmeticmanagementbe.dto.ICartDto;
import com.example.cosmeticmanagementbe.dto.ITotalDto;
import com.example.cosmeticmanagementbe.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface ICartRepo extends JpaRepository<Cart, Integer> {

    @Query(value = "select (cart.qty*cosmetic.price) as sumPerOne, cart.id, cart.qty, " +
            "cosmetic.name, cosmetic.price, images.image_link as image " +
            "from cart " +
            "join cosmetic on cart.cosmetic_id = cosmetic.id " +
            "join images on cosmetic.id = images.cosmetic_id " +
            "where cart.is_deleted = 0 " +
            "group by cosmetic.id", nativeQuery = true)

    List<ICartDto> getCartList();

    @Query(value = "select sum(cart.qty*cosmetic.price) as totalBill " +
            "from cart " +
            "join cosmetic on cart.cosmetic_id = cosmetic.id " +
            "where cart.is_deleted = 0 ", nativeQuery = true)
    ITotalDto getTotalBill();

    @Modifying
    @Query(value = "update cart set qty = qty + 1 " +
            "where id = :id and is_deleted = 0", nativeQuery = true)
    void updateCart(@Param("id") Integer id);

    @Modifying
    @Query(value = "insert into cart(cosmetic_id, qty) values(:id, 1) ", nativeQuery = true)
    void insertToCart(@Param("id") Integer id);

    @Query(value = "select * from cart where id = :id", nativeQuery = true)
    ICartDto findByIdCart(@Param("id") Integer id);
}
