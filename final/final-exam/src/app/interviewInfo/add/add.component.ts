import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Candidate} from '../../model/candidate';
import {CandidateDto} from '../../model/candidate-dto';
import {CandidateService} from '../../service/candidate.service';
import {InterviewInfoService} from '../../service/interview-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formAdd: FormGroup;
  candidates: CandidateDto[] = [];

  constructor(private fb: FormBuilder,
              private candidateService: CandidateService,
              private interviewInfoService: InterviewInfoService) {
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      schedule: [],
      name: [],
      comment: [],
      results: [],
      proposalSalary: [],
      times: [],
      candidateDto: []
    });
    this.getAllCandidate();
  }

  getAllCandidate() {
    this.candidateService.getCandidate().subscribe(value => {
      this.candidates = value;
    });
  }

  createAnInterview() {
    const candidate = this.formAdd.value;
    this.interviewInfoService.createAnInterview(candidate).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm thành công!',
        showConfirmButton: false,
        timer: 2000
      });
      this.getAllCandidate();
    }, error => {
      console.log(error);
    });
  }


}
