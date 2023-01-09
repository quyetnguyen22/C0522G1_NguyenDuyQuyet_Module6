package com.example.exam.dto;

import com.example.exam.model.Player;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class PenaltyDto {

    private Integer id;

    private String penaltyCode;
    private int corner;
    private String result;
    private boolean isDeleted = false;
    private Player player;

    public PenaltyDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPenaltyCode() {
        return penaltyCode;
    }

    public void setPenaltyCode(String penaltyCode) {
        this.penaltyCode = penaltyCode;
    }

    public int getCorner() {
        return corner;
    }

    public void setCorner(int corner) {
        this.corner = corner;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
