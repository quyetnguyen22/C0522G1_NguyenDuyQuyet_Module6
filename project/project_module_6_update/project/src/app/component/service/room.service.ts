import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../model/show-time/Room";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.roomUrl}`;
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getAllRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(API_URL);
  }
}
