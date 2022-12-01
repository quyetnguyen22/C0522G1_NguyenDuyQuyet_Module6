package com.example.finalexam.repository;

import com.example.finalexam.model.interviewInfo.InterviewInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IInterviewInfoRepository extends JpaRepository<InterviewInfo, Integer> {
}
