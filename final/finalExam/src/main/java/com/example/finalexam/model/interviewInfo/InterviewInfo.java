package com.example.finalexam.model.interviewInfo;

import com.example.finalexam.model.cadidate.Candidate;

import javax.persistence.*;

@Entity
public class InterviewInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String schedule;
    private String name;
    private String comment;
    private String results;
    private double proposalSalary;
    private Integer times;

    @ManyToOne
    @JoinColumn(name= "candidate_id",referencedColumnName = "candidateId")
    private Candidate candidate;

    public InterviewInfo() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getResults() {
        return results;
    }

    public void setResults(String results) {
        this.results = results;
    }

    public double getProposalSalary() {
        return proposalSalary;
    }

    public void setProposalSalary(double proposalSalary) {
        this.proposalSalary = proposalSalary;
    }

    public Integer getTimes() {
        return times;
    }

    public void setTimes(Integer times) {
        this.times = times;
    }

    public Candidate getCandidate() {
        return candidate;
    }

    public void setCandidate(Candidate candidate) {
        this.candidate = candidate;
    }
}
