package com.example.cosmeticmanagementbe.payload;

public class LoginRequest {

//    @NotBlank(message = "Vui lòng nhập tên đăng nhập")
//    @Size(min = 4, max = 40, message = "Sai định dạng, tài khoản từ 4 đến 40 ký tự")
//    @Pattern(regexp = "^[a-zA-Z@0-9.]$*")
    private String username;
//    @NotBlank(message = "Vui lòng nhập mật khẩu")
//    @Size(min = 6, max = 40, message = "Sai định dạng, mật khẩu từ 6 đến 40 ký tự")
    private String password;

    public LoginRequest() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
