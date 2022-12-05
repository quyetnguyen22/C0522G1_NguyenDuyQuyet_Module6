package com.example.cosmeticmanagementbe;

import com.example.cosmeticmanagementbe.model.Brand;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CosmeticManagementBeApplication {

    Brand brand = new Brand();
    public static void main(String[] args) {
        SpringApplication.run(CosmeticManagementBeApplication.class, args);
    }

}
