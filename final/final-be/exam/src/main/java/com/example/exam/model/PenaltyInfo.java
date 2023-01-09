package com.example.exam.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class PenaltyInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String penaltyCode;
    private int corner;
    private String result;
    private boolean isDeleted = false;

    @ManyToOne
    @JoinColumn(name = "player_id", referencedColumnName = "id")
    private Player player;

    public PenaltyInfo() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getPenaltyCode() {
        return penaltyCode;
    }

    public void setPenaltyCode(String penaltyCode) {
        this.penaltyCode = penaltyCode;
    }
}
