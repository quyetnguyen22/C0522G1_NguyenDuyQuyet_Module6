import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ITimes} from '../model/i-times';


const API_URL = `${environment.timeUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private http: HttpClient) { }

  getAllTime(id: number, dateT: string): Observable<ITimes[]> {
    console.log(API_URL + '/?idRoom=' + id + '&dateT=' + dateT);
    return this.http.get<ITimes[]>(API_URL + '/?idRoom=' + id + '&dateT=' + dateT);
  }
}
