package com.example.exam.service.impl;

import com.example.exam.model.Player;
import com.example.exam.repository.IPlayerRepository;
import com.example.exam.service.IPlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService implements IPlayerService {
    @Autowired
    private IPlayerRepository playerRepository;
    @Override
    public void addPlayer(Player player) {
        playerRepository.save(player);
    }

    @Override
    public String getPlayerCode(String playerCode) {
        return playerRepository.findPlayerCode(playerCode);
    }
}
