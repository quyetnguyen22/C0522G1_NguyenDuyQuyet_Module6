package com.example.exam.service;

import com.example.exam.model.Player;

public interface IPlayerService {
    void addPlayer(Player player);

    String getPlayerCode(String playerCode);
}
