package com.example.exam.repository;

import com.example.exam.account.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IRoleRepo extends JpaRepository<Role, Long> {

    @Query(value = "select * from role where is_deleted = 0 and name like %:name%", nativeQuery = true)
    Role findByName(String name);
}
