package com.example.finalexam.model.cadidate;

import javax.persistence.*;

@Entity
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer candidateId;
    private String name;
    private String dateOfBirth;
    private String address;
    private String phone;
    private boolean isDelete = false;

    @ManyToOne
    @JoinColumn(name= "candidate_type_id",referencedColumnName = "candidateTypeId")
    private CandidateType candidateType;

    public Candidate() {
    }

    public Integer getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Integer candidateId) {
        this.candidateId = candidateId;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public CandidateType getCandidateType() {
        return candidateType;
    }

    public void setCandidateType(CandidateType candidateType) {
        this.candidateType = candidateType;
    }
}
