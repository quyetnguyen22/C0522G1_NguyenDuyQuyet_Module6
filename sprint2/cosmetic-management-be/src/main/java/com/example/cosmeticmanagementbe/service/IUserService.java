package com.example.cosmeticmanagementbe.service;

import com.example.cosmeticmanagementbe.domain.Role;
import com.example.cosmeticmanagementbe.domain.User;

import java.util.List;

public interface IUserService {
    User saveUser(User user);

    Role saveRole(Role name);

    void addRoleToUser(String username, String roleName);

    User getUser(String username);

    List<User> getUsers();
}
