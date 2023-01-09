package com.example.exam.service;

import com.example.exam.account.Role;
import com.example.exam.account.User;

import java.util.List;

public interface IUserService {
    User saveUser(User user);

    Role saveRole(Role name);

    void addRoleToUser(String username, String roleName);

    User getUser(String username);

    List<User> getUsers();
}
