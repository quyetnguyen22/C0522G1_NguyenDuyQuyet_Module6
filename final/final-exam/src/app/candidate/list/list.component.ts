import {Component, OnInit} from '@angular/core';
import {CandidateService} from '../../service/candidate.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CandidateDto} from '../../model/candidate-dto';
import {CandidateType} from '../../model/candidate-type';
import Swal from 'sweetalert2';
import {Candidate} from '../../model/candidate';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameSearch = '';
  typeSearch = '';
  page = 1;
  pageSize = 5;
  total$: Observable<number>;
  candidates$: Observable<CandidateDto[]>;
  candidateTypes$: Observable<CandidateType[]>;
  detailCandidate: CandidateDto;

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit(): void {
    this.getAllCandidate();
    this.getAllCandidateType();
  }

  getAllCandidate(): void {
    this.candidateService.getAllCandidate(this.nameSearch, this.typeSearch, this.page, this.pageSize).subscribe(value => {
        this.candidates$ = new BehaviorSubject<CandidateDto[]>(value.content);
        this.total$ = new BehaviorSubject<number>(value.totalElements);
        console.log(this.candidates$);
      },
      error => {
        console.log(error);
      });
  }

  getAllCandidateType(): void {
    this.candidateService.getAllType().subscribe(value => {
        this.candidateTypes$ = new BehaviorSubject<CandidateType[]>(value);
      },
      error => {
        console.log(error);
      });
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
  }

  resetSearchInput(): void {
    this.nameSearch = '';
    this.typeSearch = '';
  }

  searchByMore(): void {
    this.page = 1;
    this.getAllCandidate();
  }

  deleteCandidate(id: number, name: string): void {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Ứng viên: ' + name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xóa!',
      cancelButtonText: 'Đóng'
    }).then((result) => {
      if (result.isConfirmed) {
        this.candidateService.deleteCandidate(id).subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa thành công!',
            text: 'Ứng viên: ' + name,
            showConfirmButton: false,
            timer: 2000
          });
          this.getAllCandidate();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  showDetail(item: CandidateDto) {
    this.detailCandidate = item;
    console.log(this.detailCandidate);
  }
}
