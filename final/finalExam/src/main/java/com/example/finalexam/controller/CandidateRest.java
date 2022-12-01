package com.example.finalexam.controller;

import com.example.finalexam.dto.CandidateDto;
import com.example.finalexam.dto.ICandidateDto;
import com.example.finalexam.model.cadidate.Candidate;
import com.example.finalexam.model.cadidate.CandidateType;
import com.example.finalexam.service.ICandidateService;
import com.example.finalexam.service.ICandidateTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("api/candidate")
public class CandidateRest {

    @Autowired
    private ICandidateService candidateService;

    @Autowired
    private ICandidateTypeService candidateTypeService;

    @GetMapping("/list")
    public ResponseEntity<Page<ICandidateDto>> getAllCandidate(@RequestParam("name") String nameSearch,
                                                                 @RequestParam("type") String typeSearch,
                                                                 @PageableDefault(value = 5) Pageable pageable) {
        Page<ICandidateDto> candidateDtos = candidateService.getAllCandidate(nameSearch, typeSearch, pageable);
        return new ResponseEntity<>(candidateDtos, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Candidate>> getCandidate() {
//        List<ICandidateDto> candidate = candidateService.getCandidate();
        List<Candidate> candidate = candidateService.getCandidate();
        return new ResponseEntity<>(candidate, HttpStatus.OK);
    }

    @GetMapping("/type-list")
    public ResponseEntity<List<CandidateType>> getAllType() {
        List<CandidateType> candidateTypes = candidateTypeService.getAllType();
        if (candidateTypes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(candidateTypes, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Candidate> deleteCandidate(@PathVariable Integer id) {
        Optional<Candidate> candidate = candidateService.findById(id);
        if (!candidate.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        candidateService.deleteCandidate(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
