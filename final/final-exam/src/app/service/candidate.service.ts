import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Results} from '../model/results';
import {Candidate} from '../model/candidate';
import {CandidateType} from '../model/candidate-type';
import {CandidateDto} from '../model/candidate-dto';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCandidate(name: string, typeSearch: string, page: number, pageSize: number): Observable<Results<CandidateDto>> {
    console.log(API_URL + '/candidate/list?name=' + name + '&type=' +
      typeSearch + '&page=' + (page - 1) + '&size=' + pageSize);
    return this.httpClient.get<Results<CandidateDto>>(API_URL + '/candidate/list?name=' + name + '&type=' +
      typeSearch + '&page=' + (page - 1) + '&size=' + pageSize);
  }

  getAllType(): Observable<CandidateType[]> {
    return this.httpClient.get<CandidateType[]>(API_URL + '/candidate/type-list');
  }

  deleteCandidate(id: number): Observable<void> {
    return this.httpClient.delete<void>(API_URL + '/candidate/delete/' + id);
  }

  getCandidate(): Observable<CandidateDto[]> {
    return this.httpClient.get<CandidateDto[]>(API_URL + '/candidate/all');
  }

}
