package com.example.finalexam.repository;

import com.example.finalexam.dto.ICandidateDto;
import com.example.finalexam.model.cadidate.Candidate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICandidateRepository extends JpaRepository<Candidate, Integer> {

    @Query(value = "select c.candidate_id as candidateId, c.name as name, c.date_of_birth as dateOfBirth, " +
            "c.address as address, c.phone as phone, t.name as typeName " +
            "from candidate as c join candidate_type as t on c.candidate_type_id = t.candidate_type_id " +
            "where c.name like %:nameSearch% and t.name like %:typeSearch% " +
            "and c.is_delete = false",
            countQuery = "select count(*) " +
                    "from candidate as c join candidate_type as t on c.candidate_type_id = t.candidate_type_id " +
                    "where c.name like %:nameSearch% and t.name like %:typeSearch% " +
                    "and c.is_delete = false",
            nativeQuery = true)
    Page<ICandidateDto> getAllCandidate(@Param("nameSearch") String nameSearch,
                                      @Param("typeSearch") String typeSearch,
                                      Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "update candidate set is_delete = true where candidate_id = :idDelete", nativeQuery = true)
    void deleteCandidate(@Param("idDelete") Integer id);


//    @Query(value = "select c.candidate_id as candidateId, c.name as name " +
//            "from candidate as c where c.is_delete = false",
//            countQuery = "select count(*) from candidate as c where c.is_delete = false",
//            nativeQuery = true)
//    List<ICandidateDto> getCandidate();
}
