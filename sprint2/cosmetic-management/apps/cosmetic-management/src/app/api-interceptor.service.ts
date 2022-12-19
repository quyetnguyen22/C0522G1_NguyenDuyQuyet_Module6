import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenStorageService} from "./service/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenStorageService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ` + this.tokenService.getToken()
    //   }
    // });
    //
    // return next.handle(request);
    const token = this.tokenService.getToken(); // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(request);
    }

    const req = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req);
  }
}
