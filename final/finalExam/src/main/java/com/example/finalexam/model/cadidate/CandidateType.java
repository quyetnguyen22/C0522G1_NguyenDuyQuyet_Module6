package com.example.finalexam.model.cadidate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CandidateType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer candidateTypeId;
    private String name;

    public CandidateType() {
    }

    public Integer getCandidateTypeId() {
        return candidateTypeId;
    }

    public void setCandidateTypeId(Integer candidateTypeId) {
        this.candidateTypeId = candidateTypeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
