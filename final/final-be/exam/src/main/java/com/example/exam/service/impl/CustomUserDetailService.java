package com.example.exam.service.impl;


import com.example.exam.account.Role;
import com.example.exam.account.User;
import com.example.exam.repository.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private IUserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username);

        List<GrantedAuthority> grantedAuthorityList = new ArrayList<>();
        for (Role role : user.getRoles()) {
            grantedAuthorityList.add(new SimpleGrantedAuthority(role.getName()));
            System.out.println(role.getName());
        }
        //        return new CustomUserDetail(user);
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), grantedAuthorityList);
    }


}
