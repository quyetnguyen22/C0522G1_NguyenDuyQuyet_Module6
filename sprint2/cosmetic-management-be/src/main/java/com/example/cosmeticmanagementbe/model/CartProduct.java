package com.example.cosmeticmanagementbe.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "cart_cosmetic")
public class CartProduct implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @ManyToOne
    @JoinColumn(name = "cosmetic_id", referencedColumnName = "id")
    private Product cosmetic;
    @Id
    @ManyToOne
    @JoinColumn(name = "cart_id", referencedColumnName = "id")
    private Cart cart;
    private Integer qty;
    @Column(name = "is_deleted")
    private boolean isDeleted;

    public CartProduct() {
    }

    public Integer getQty() {
        return qty;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }

    public Product getCosmetic() {
        return cosmetic;
    }

    public void setCosmetic(Product cosmetic) {
        this.cosmetic = cosmetic;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
