package com.example.exam.service.impl;


import com.example.exam.dto.IPenaltyDto;
import com.example.exam.dto.TeamDto;
import com.example.exam.model.Player;
import com.example.exam.model.Team;
import com.example.exam.repository.IPenaltyRepository;
import com.example.exam.service.IPenaltyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PenaltyService implements IPenaltyService {

    @Autowired
    private IPenaltyRepository penaltyRepository;

    @Override
    public void deletePenalty(Integer id) {
        penaltyRepository.deletePenalty(id);
    }

    @Override
    public void deleteSelectedPenalties(List<Integer> idList) {
        penaltyRepository.deleteSelectedPenalties(idList);
    }

//
//    @Override
//    public void editProduct(Team team) {
//        productRepository.save(team);
//    }
//
//    @Override
//    public Optional<Team> findProductById(Integer id) {
//        return productRepository.findById(id);
//    }

    @Override
    public Page<IPenaltyDto> getListPenalty(String name, Pageable pageable) {
        return penaltyRepository.getListPenalty(name, pageable);
    }

    @Override
    public List<Team> getTeams() {
        return penaltyRepository.findAll();
    }

}
