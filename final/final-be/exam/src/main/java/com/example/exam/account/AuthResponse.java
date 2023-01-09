package com.example.exam.account;

import java.util.ArrayList;
import java.util.Collection;

public class AuthResponse {

    private String accessToken;
    private String tokenType = "Bearer";
    private String username;
    Collection<String> roles = new ArrayList<>();

    public AuthResponse() {
    }

    public AuthResponse(String accessToken, String username, Collection<String> roles) {
        this.accessToken = accessToken;
        this.username = username;
        this.roles = roles;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Collection<String> getRoles() {
        return roles;
    }

    public void setRoles(Collection<String> roles) {
        this.roles = roles;
    }
}
