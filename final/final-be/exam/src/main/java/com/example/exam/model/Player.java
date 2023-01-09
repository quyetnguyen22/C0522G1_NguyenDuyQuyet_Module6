package com.example.exam.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String playerCode;

    private String dateOfBirth;

    private boolean isDeleted = false;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team;

    public Player() {
    }

    public Integer getId() {
        return id;
    }

    public String getPlayerCode() {
        return playerCode;
    }

    public void setPlayerCode(String playerCode) {
        this.playerCode = playerCode;
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
