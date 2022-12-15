package com.example.cosmeticmanagementbe.repository;

import com.example.cosmeticmanagementbe.dto.IProductDto;
import com.example.cosmeticmanagementbe.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select cosmetic.id as id, cosmetic.name as name, cosmetic.price as price, " +
            "images.image_link as imageLink from cosmetic " +
            "join images on cosmetic.id = images.cosmetic_id " +
            "where cosmetic.is_deleted = 0 and cosmetic.name like %:name% " +
            "group by cosmetic.id", nativeQuery = true,
    countQuery = "select count(*) from cosmetic " +
            "join images on cosmetic.id = images.cosmetic_id " +
            "where cosmetic.is_deleted = 0 and cosmetic.name like %:name% " +
            "group by cosmetic.id")
    Page<IProductDto> getListProduct(@Param("name") String name, Pageable pageable);

    @Query(value = "select cosmetic.id as id, cosmetic.name as name, cosmetic.price as price, " +
            "images.image_link as imageLink from cosmetic " +
            "join images on cosmetic.id = images.cosmetic_id " +
            "where cosmetic.is_deleted = 0 and cosmetic.name like %:name% and cosmetic.gender = 2 " +
            "group by cosmetic.id", nativeQuery = true,
            countQuery = "select count(*) from cosmetic " +
                    "join images on cosmetic.id = images.cosmetic_id " +
                    "where cosmetic.is_deleted = 0 and cosmetic.name like %:name% and cosmetic.gender = 2 " +
                    "group by cosmetic.id")
    Page<IProductDto> getWomenProduct(@Param("name") String name, Pageable pageable);
}
