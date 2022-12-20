package com.example.cosmeticmanagementbe.repository;

import com.example.cosmeticmanagementbe.dto.ICartDto;
import com.example.cosmeticmanagementbe.dto.IProductDto;
import com.example.cosmeticmanagementbe.dto.ITotalDto;
import com.example.cosmeticmanagementbe.model.Cart;
import com.example.cosmeticmanagementbe.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface ICartRepo extends JpaRepository<Cart, Integer> {

    @Query(value = "select (cart_cosmetic.qty*cosmetic.price) as sumPerOne, cosmetic.id, cart_cosmetic.qty, " +
            "cosmetic.name, cosmetic.price, images.image_link as image " +
            "from cart_cosmetic " +
            "join cart on cart.id = cart_cosmetic.cart_id " +
            "join cosmetic on cart_cosmetic.cosmetic_id = cosmetic.id " +
            "join images on cosmetic.id = images.cosmetic_id " +
            "where cart_cosmetic.cart_id = :cartId and cart_cosmetic.is_deleted = 0 " +
            "group by cosmetic.id ", nativeQuery = true)
    List<ICartDto> getCartList(Integer cartId);

    @Query(value = "select * from cart where username = :username and is_deleted = 0", nativeQuery = true)
    Cart findCartId(@Param("username") String username);

    @Query(value = "select sum(cart_cosmetic.qty*cosmetic.price) as totalBill, count(cart_cosmetic.cosmetic_id) as countProduct " +
            "from cart_cosmetic " +
            "join cosmetic on cart_cosmetic.cosmetic_id = cosmetic.id " +
            "where cart_cosmetic.cart_id = :cartId and cart_cosmetic.is_deleted = 0  ", nativeQuery = true)
    ITotalDto getTotalBill(@Param("cartId") Integer cartId);

    @Modifying
    @Query(value = "update cart_cosmetic set qty = qty + 1 " +
            "where cart_cosmetic.cosmetic_id = :id and is_deleted = 0", nativeQuery = true)
    void updateCosmeticCart(@Param("id") Integer id);

    @Modifying
    @Query(value = "insert into cart_cosmetic(cart_id,cosmetic_id, qty) values(:cartId, :id, 1) ", nativeQuery = true)
    void insertProductToCart(@Param("id") Integer id,
                      @Param("cartId") Integer cartId);

    @Query(value = "select cosmetic.id, cart.username as username from cart_cosmetic " +
            "join cosmetic on cart_cosmetic.cosmetic_id = cosmetic.id " +
            "join cart on cart.id = cart_cosmetic.cart_id " +
            "where cart_cosmetic.cosmetic_id = :id and cart.username = :username and cart_cosmetic.is_deleted= 0", nativeQuery = true)
    IProductDto findByIdCosmetic(@Param("id") Integer id,
                                 @Param("username") String username);

    @Modifying
    @Query(value = "update cart_cosmetic set qty = :qty " +
            "where cart_cosmetic.cosmetic_id = :id and cart_id = :cartId and is_deleted = 0", nativeQuery = true)
    void updateQty(Integer id, Integer qty, Integer cartId);

    @Modifying
    @Query(value = "update cart set is_deleted = 1 " +
            "where id = :id", nativeQuery = true)
    void deleteProduct(Integer id);
}
