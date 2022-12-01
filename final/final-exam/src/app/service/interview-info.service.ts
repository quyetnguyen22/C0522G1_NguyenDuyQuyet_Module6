import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {InterviewInfo} from '../model/interview-info';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class InterviewInfoService {

  constructor(private httpClient: HttpClient) { }

  createAnInterview(interviewInfo: InterviewInfo): Observable<void> {
    console.log(interviewInfo);
    return this.httpClient.post<void>(API_URL + '/interviewInfo/add', interviewInfo);
  }
}
