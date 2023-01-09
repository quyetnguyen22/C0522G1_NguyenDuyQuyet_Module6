package com.example.exam.repository;

import com.example.exam.dto.IPenaltyDto;
import com.example.exam.model.Team;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IPenaltyRepository extends JpaRepository<Team, Integer> {

    @Query(value = "select pen.id, pen.penalty_code as penaltyCode, pen.corner, pen.result, " +
            "p.name as playerName, t.name as teamName " +
            "from penalty_info as pen " +
            "join player as p on p.id = pen.player_id " +
            "join team as t on t.id = p.team_id " +
            "where pen.is_deleted = 0 and p.name like %:name% ", nativeQuery = true,
    countQuery = "select count(*) from penalty_info ")
    Page<IPenaltyDto> getListPenalty(@Param("name") String name, Pageable pageable);

    @Query(value = "select count(pen.result) as countPen, pen.id, pen.penalty_code as penaltyCode, pen.corner, pen.result, " +
            "p.name as playerName, t.name as teamName " +
            "from penalty_info as pen " +
            "join player as p on p.id = pen.player_id " +
            "join team as t on t.id = p.team_id " +
            "group by pen.player_id " +
            "having max(countPen)", nativeQuery = true)
    IPenaltyDto getPlayerByResult(@Param("id") Integer id);

    @Modifying
    @Query(value = "update penalty_info set is_deleted = 1 where id = :id", nativeQuery = true)
    void deletePenalty(Integer id);

    @Modifying
    @Query(value = "update penalty_info set is_deleted = 1 where id in (:idList)", nativeQuery = true)
    void deleteSelectedPenalties(List<Integer> idList);
}
