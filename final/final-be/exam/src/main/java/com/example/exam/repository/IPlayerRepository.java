package com.example.exam.repository;

import com.example.exam.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IPlayerRepository extends JpaRepository<Player, Integer> {

    @Query(value = "select player_code from player where player_code = :playerCode", nativeQuery = true)
    String findPlayerCode(String playerCode);
}
