//package com.example.cosmeticmanagementbe.service.impl;
//
//import com.example.cosmeticmanagementbe.domain.Role;
//import com.example.cosmeticmanagementbe.domain.User;
//import com.example.cosmeticmanagementbe.repository.IRoleRepo;
//import com.example.cosmeticmanagementbe.repository.IUserRepo;
//import com.example.cosmeticmanagementbe.service.IUserService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//@Transactional
//@Slf4j
//public class UserService implements IUserService, UserDetailsService {
//
//    @Autowired
//    private IUserRepo userRepo;
//
//    @Autowired
//    private IRoleRepo roleRepo;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepo.findByUsername(username);
//        if (user == null){
//            throw new UsernameNotFoundException("User not found in the database");
//        }
//        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        user.getRoles().forEach(role -> {authorities.add(new SimpleGrantedAuthority(role.getName()));
//        });
//        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
//    }
//
//    @Override
//    public User saveUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userRepo.save(user);
//    }
//
//    @Override
//    public Role saveRole(Role name) {
//        return roleRepo.save(name);
//    }
//
//    @Override
//    public void addRoleToUser(String username, String roleName) {
//        User user = userRepo.findByUsername(username);
//        Role role = roleRepo.findByName(roleName);
//        user.getRoles().add(role);
//    }
//
//    @Override
//    public User getUser(String username) {
//        return userRepo.findByUsername(username);
//    }
//
//    @Override
//    public List<User> getUsers() {
//        return userRepo.findAll();
//    }
//
//}
