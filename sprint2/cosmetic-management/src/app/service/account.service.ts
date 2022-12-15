import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {DataContent} from "../model/data-content";
import {ProductDto} from "../dto/product-dto";
import {Account} from "../model/account";

const URL_API = `${environment.url}`
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  requestLogin(account: Account): Observable<any> {
    console.log(URL_API + '/login', account, this.httpOptions)
    return this.http.post<any>(URL_API + '/login', {
      username: account.username,
      password: account.password
    }, this.httpOptions);
  }
}
