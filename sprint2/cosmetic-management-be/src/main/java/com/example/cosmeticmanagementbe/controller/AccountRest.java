//package com.example.cosmeticmanagementbe.controller;
//
//import com.example.cosmeticmanagementbe.domain.Role;
//import com.example.cosmeticmanagementbe.domain.User;
//import com.example.cosmeticmanagementbe.payload.LoginRequest;
//import com.example.cosmeticmanagementbe.service.impl.UserService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//import javax.validation.Valid;
//import java.net.URI;
//import java.util.List;
//
//@RestController
//@CrossOrigin("*")
//@RequiredArgsConstructor
//@RequestMapping("/api")
//public class AccountRest {
//
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/login")
//    public ResponseEntity<?> requestLogin(@RequestBody User user) {
//        userService.loadUserByUsername(user.getUsername());
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getUser(){
//        return ResponseEntity.ok().body(userService.getUsers());
//    }
//
//    @PostMapping("/user/save")
//    public ResponseEntity<User> saveUser(@RequestBody User user) {
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
//        return ResponseEntity.created(uri).body(userService.saveUser(user));
//    }
//
//    @PostMapping("/role/save")
//    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
//        return ResponseEntity.created(uri).body(userService.saveRole(role));
//    }
//
//    @PostMapping("/role/add-to-user")
//    public ResponseEntity<?> addToUser(@RequestBody RoleToUserForm form) {
//        userService.addRoleToUser(form.getUsername(), form.getRoleName());
//        return ResponseEntity.ok().build();
//    }
//}
//
////@Data
//class RoleToUserForm{
//    private String username;
//    private String roleName;
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getRoleName() {
//        return roleName;
//    }
//
//    public void setRoleName(String roleName) {
//        this.roleName = roleName;
//    }
//}
