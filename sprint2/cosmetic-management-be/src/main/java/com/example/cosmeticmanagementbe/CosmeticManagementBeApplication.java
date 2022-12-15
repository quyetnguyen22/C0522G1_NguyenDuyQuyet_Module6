package com.example.cosmeticmanagementbe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CosmeticManagementBeApplication {

    //    Brand brand = new Brand();
    public static void main(String[] args) {
        SpringApplication.run(CosmeticManagementBeApplication.class, args);
    }

//    @Bean
//    CommandLineRunner run(UserService userService) {
//        return args -> {
//            userService.saveRole(new Role(null, "ROLE_USER"));
//            userService.saveRole(new Role(null, "ROLE_ADMIN"));
//
//            userService.saveUser(new User("will", "1234", new ArrayList<>()));
//            userService.saveUser(new User("john", "1234", new ArrayList<>()));
//
//            userService.addRoleToUser("john", "ROLE_USER");
//            userService.addRoleToUser("will", "ROLE_ADMIN");
//        };
//    }

//    @Bean
//    BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
}
