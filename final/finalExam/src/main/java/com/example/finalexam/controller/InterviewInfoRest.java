package com.example.finalexam.controller;

import com.example.finalexam.dto.InterviewInfoDto;
import com.example.finalexam.model.interviewInfo.InterviewInfo;
import com.example.finalexam.service.IInterviewInfoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/interviewInfo")
public class InterviewInfoRest {

    @Autowired
    private IInterviewInfoService interviewInfoService;

    @PostMapping("/add")
    public ResponseEntity<?> createAnInterview(@RequestBody InterviewInfoDto interviewInfoDto) {

        InterviewInfo interviewInfo = new InterviewInfo();
        BeanUtils.copyProperties(interviewInfoDto, interviewInfo);
        interviewInfoService.createAnInterview(interviewInfo);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
