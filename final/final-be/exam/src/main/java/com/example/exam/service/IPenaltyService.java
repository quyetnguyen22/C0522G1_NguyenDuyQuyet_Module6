package com.example.exam.service;


import com.example.exam.dto.IPenaltyDto;
import com.example.exam.dto.TeamDto;
import com.example.exam.model.Player;
import com.example.exam.model.Team;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IPenaltyService {

    Page<IPenaltyDto> getListPenalty(String name, Pageable pageable);
    List<Team> getTeams();

//    IPenaltyDto getProductById(Integer id);
    void deletePenalty(Integer id);
    void deleteSelectedPenalties(List<Integer> idList);

//    void editProduct(Team team);
//
//    Optional<Team> findProductById(Integer id);
}
