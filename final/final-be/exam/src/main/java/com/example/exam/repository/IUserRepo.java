package com.example.exam.repository;

import com.example.exam.account.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IUserRepo extends JpaRepository<User, Long> {

    @Query(value = "select * from user where is_deleted = 0 and username like %:username%", nativeQuery = true)
    User findByUsername(String username);
}
