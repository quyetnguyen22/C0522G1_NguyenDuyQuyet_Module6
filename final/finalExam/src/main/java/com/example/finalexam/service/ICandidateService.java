package com.example.finalexam.service;

import com.example.finalexam.dto.CandidateDto;
import com.example.finalexam.dto.ICandidateDto;
import com.example.finalexam.model.cadidate.Candidate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ICandidateService {

    Page<ICandidateDto> getAllCandidate(String nameSearch, String typeSearch, Pageable pageable);

//    List<ICandidateDto> getCandidate();

    List<Candidate> getCandidate();

    void deleteCandidate(Integer id);

    Optional<Candidate> findById(Integer id);
}
