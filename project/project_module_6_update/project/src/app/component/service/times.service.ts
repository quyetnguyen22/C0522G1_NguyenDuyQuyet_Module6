import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../model/show-time/Room";
import {Times} from "../../model/show-time/Times";

const API_URL = `${environment.timeUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private http: HttpClient) { }

  getAllTime(): Observable<Times[]> {
    return this.http.get<Times[]>(API_URL);
  }
}
