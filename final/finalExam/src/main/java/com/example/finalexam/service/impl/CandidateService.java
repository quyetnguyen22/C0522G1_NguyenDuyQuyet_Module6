package com.example.finalexam.service.impl;

import com.example.finalexam.dto.CandidateDto;
import com.example.finalexam.dto.ICandidateDto;
import com.example.finalexam.model.cadidate.Candidate;
import com.example.finalexam.repository.ICandidateRepository;
import com.example.finalexam.service.ICandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidateService implements ICandidateService{

    @Autowired
    private ICandidateRepository candidateRepository;


    @Override
    public Page<ICandidateDto> getAllCandidate(String nameSearch, String typeSearch, Pageable pageable) {
        return candidateRepository.getAllCandidate(nameSearch, typeSearch, pageable);
    }

//    @Override
//    public List<ICandidateDto> getCandidate() {
//        return candidateRepository.getCandidate();
//    }

    @Override
    public List<Candidate> getCandidate() {
        return candidateRepository.findAll();
    }

    @Override
    public void deleteCandidate(Integer id) {
        candidateRepository.deleteCandidate(id);
    }

    @Override
    public Optional<Candidate> findById(Integer id) {
        return candidateRepository.findById(id);
    }

}
