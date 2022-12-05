import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../dto/product-dto";
import {environment} from "../../environments/environment";

const URL_API = `${environment.url}`
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList(): Observable<ProductDto> {
    return this.http.get<ProductDto>(URL_API + '/list');
  }
}
