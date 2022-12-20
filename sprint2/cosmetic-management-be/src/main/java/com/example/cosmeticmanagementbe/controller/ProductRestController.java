package com.example.cosmeticmanagementbe.controller;

import com.example.cosmeticmanagementbe.dto.ICartDto;
import com.example.cosmeticmanagementbe.dto.IProductDto;
import com.example.cosmeticmanagementbe.dto.ITotalDto;
import com.example.cosmeticmanagementbe.model.Cart;
import com.example.cosmeticmanagementbe.model.Product;
import com.example.cosmeticmanagementbe.service.ICartService;
import com.example.cosmeticmanagementbe.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/product")
public class ProductRestController {

    @Autowired
    private IProductService productService;
    @Autowired
    private ICartService cartService;

    @GetMapping("/list")
    public ResponseEntity<Page<IProductDto>> getListProduct(@PageableDefault(value = 10) Pageable pageable,
                                                            @RequestParam(value = "name", defaultValue = "") String name) {
        Page<IProductDto> productDto = productService.getListProduct(name, pageable);
        if (productDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }

    @GetMapping("/women-list")
    public ResponseEntity<Page<IProductDto>> getWomenProduct(@PageableDefault(value = 10) Pageable pageable,
                                                             @RequestParam(value = "name", defaultValue = "") String name) {
        Page<IProductDto> productDto = productService.getWomenProduct(name, pageable);
        if (productDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }

    @GetMapping("/cart")
    public ResponseEntity<List<ICartDto>> getCartList(@RequestParam String username) {
        Cart cart = cartService.findCartByUsername(username);
        List<ICartDto> cartDtos = cartService.getCartList(cart.getId());
        if (cartDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cartDtos, HttpStatus.OK);
    }

    @GetMapping("/total-bill")
    public ResponseEntity<ITotalDto> getTotalBill(@RequestParam String username) {
        Cart cart = cartService.findCartByUsername(username);
        ITotalDto totalBill = cartService.getTotalBill(cart.getId());
        if (totalBill == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(totalBill, HttpStatus.OK);
    }

    @PostMapping("/cart-update")
    public ResponseEntity<?> updateCart(@RequestParam Integer id,
                                        @RequestParam String username) {
        IProductDto productDto = cartService.findById(id, username);
        Cart cart = cartService.findCartByUsername(username);
        if (productDto == null) {
            cartService.insertProductToCart(id, cart.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        cartService.updateCosmeticCart(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/qty-update")
    public ResponseEntity<?> updateQty(@RequestParam Integer id,
                                       @RequestParam Integer qty,
                                       @RequestParam String username) {

        Cart cart = cartService.findCartByUsername(username);
        cartService.updateQty(id, qty, cart.getId());

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/del-product")
    public ResponseEntity<?> deleteProduct(@RequestParam Integer id) {

        cartService.deleteProduct(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @GetMapping
//    public String test(Principal principal) {
//        return "ok" + principal.getName();
//    }
}
