package com.example.finalexam.service.impl;

import com.example.finalexam.model.cadidate.CandidateType;
import com.example.finalexam.repository.ICandidateTypeRepository;
import com.example.finalexam.service.ICandidateTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateTypeService implements ICandidateTypeService {

    @Autowired
    private ICandidateTypeRepository candidateTypeRepository;

    @Override
    public List<CandidateType> getAllType() {
        return candidateTypeRepository.findAll();
    }
}
