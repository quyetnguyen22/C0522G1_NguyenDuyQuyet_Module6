package com.example.finalexam.service.impl;

import com.example.finalexam.model.interviewInfo.InterviewInfo;
import com.example.finalexam.repository.IInterviewInfoRepository;
import com.example.finalexam.service.IInterviewInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class InterviewInfoService implements IInterviewInfoService {

    @Autowired
    private IInterviewInfoRepository interviewInfoRepository;

    @Override
    public void createAnInterview(InterviewInfo interviewInfo) {
        interviewInfoRepository.save(interviewInfo);
    }
}
