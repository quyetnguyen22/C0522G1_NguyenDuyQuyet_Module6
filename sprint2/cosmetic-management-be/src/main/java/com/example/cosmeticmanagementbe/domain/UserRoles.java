//package com.example.cosmeticmanagementbe.domain;
//
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import java.io.Serializable;
//
//@Entity
//public class UserRoles implements Serializable {
//
//    private static final long serialVersionUID = 1L;
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "role_id" , referencedColumnName = "id")
//    Role role;
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    User user;
//
//    boolean isDelete = false;
//
//    public UserRoles() {
//    }
//
//    public Role getRole() {
//        return role;
//    }
//
//    public void setRole(Role role) {
//        this.role = role;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public boolean isDelete() {
//        return isDelete;
//    }
//
//    public void setDelete(boolean delete) {
//        isDelete = delete;
//    }
//}
