package com.example.exam.dto;

import com.example.exam.model.Team;

import javax.validation.constraints.NotBlank;

public class PlayerDto {
    private Integer id;

    @NotBlank
    private String name;
    @NotBlank
    private String playerCode;
    @NotBlank
    private String dateOfBirth;

    private boolean isDeleted = false;

    private Team team;

    public PlayerDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlayerCode() {
        return playerCode;
    }

    public void setPlayerCode(String playerCode) {
//        if (playerCode)
        this.playerCode = playerCode;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }
}
