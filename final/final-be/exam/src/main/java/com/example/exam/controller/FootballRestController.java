package com.example.exam.controller;


import com.example.exam.dto.IPenaltyDto;
import com.example.exam.dto.PenaltyDto;
import com.example.exam.dto.PlayerDto;
import com.example.exam.model.Player;
import com.example.exam.model.Team;
import com.example.exam.service.IPenaltyService;
import com.example.exam.service.IPlayerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/penalty")
public class FootballRestController {

    @Autowired
    private IPenaltyService penaltyService;

    @Autowired
    private IPlayerService playerService;

    @GetMapping("/list")
    public ResponseEntity<Page<IPenaltyDto>> getListProduct(@PageableDefault(value = 10) Pageable pageable,
                                                            @RequestParam(value = "name", defaultValue = "") String name) {
        Page<IPenaltyDto> productDto = penaltyService.getListPenalty(name, pageable);
        if (productDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }

    @GetMapping("/teams")
    public ResponseEntity<List<Team>> getTeams() {
        List<Team> teamDtos = penaltyService.getTeams();
        if (teamDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(teamDtos, HttpStatus.OK);
    }

    @DeleteMapping("/del-penalty")
    public ResponseEntity<?> deletePenalty(@RequestParam Integer id) {

        penaltyService.deletePenalty(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/del-selected-products")
    public ResponseEntity<?> deleteSelectedPenalties(@RequestBody List<PenaltyDto> penaltyDtos) {
        List<Integer> idList = new ArrayList<>();
        for (PenaltyDto penaltyDto : penaltyDtos) {
            Integer id = penaltyDto.getId();
            idList.add(id);
        }
        penaltyService.deleteSelectedPenalties(idList);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/add-player")
    public ResponseEntity<?> addProduct(@RequestBody @Valid PlayerDto playerDto,
                                        BindingResult bindingResult) {
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),
                    HttpStatus.BAD_REQUEST);
        } else {
            Player player = new Player();
            BeanUtils.copyProperties(playerDto, player);
            playerService.addPlayer(player);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

}
