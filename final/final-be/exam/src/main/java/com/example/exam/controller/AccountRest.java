package com.example.exam.controller;


import com.example.exam.account.AuthRequest;
import com.example.exam.account.AuthResponse;
import com.example.exam.service.impl.CustomUserDetailService;
import com.example.exam.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AccountRest {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private CustomUserDetailService customUserDetailService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @GetMapping("")
    public String requestLogin(){
        return "Login successfully!";
    }

    @PostMapping("/login")
    public ResponseEntity<?> generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        String jwt;
//        CustomUserDetail myUserDetails;
        UserDetails myUserDetails;
        List<String> roles;
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            jwt = jwtUtil.generateToken(authRequest.getUsername());
//            myUserDetails = (CustomUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            myUserDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            roles = myUserDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());
        } catch (Exception ex) {
            throw new Exception("invalid username/password");
        }
        return ResponseEntity.ok(
                new AuthResponse(
                        jwt,
                        myUserDetails.getUsername(),
                        roles));
    }
}
