package com.example.cosmeticmanagementbe.repository;

import com.example.cosmeticmanagementbe.dto.ProductDto;
import com.example.cosmeticmanagementbe.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select * from cosmetic as c " +
            "join cos_type as t on c.cos_type_id = t.id " +
            "join brand as b on c.brand_id = b.id " +
            "join producer as p on p.id = c.producer_id " +
            "where c.is_deleted = 0 ", nativeQuery = true)
    Page<ProductDto> getListProduct(Pageable pageable);
}
