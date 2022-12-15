import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../dto/product-dto";
import {environment} from "../../environments/environment";
import {DataContent} from "../model/data-content";
import {CartDto} from "../dto/cart-dto";

const URL_API = `${environment.url}`
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList(pageSize: number, name: string): Observable<DataContent<ProductDto>> {
    return this.http.get<DataContent<ProductDto>>(URL_API + '/product/list?name=' + name + '&size=' + pageSize);
  }

  getWomenList(pageSize: number, name: string): Observable<DataContent<ProductDto>> {
    return this.http.get<DataContent<ProductDto>>(URL_API + '/product/women-list?name=' + name + '&size=' + pageSize);
  }

  getCartList(): Observable<CartDto[]> {
    return this.http.get<CartDto[]>(URL_API + '/product/cart');
  }

  getTotalBill(): Observable<CartDto> {
    return this.http.get<CartDto>(URL_API + '/product/total-bill');
  }

  updateCart(cartDto: CartDto): Observable<void> {
    return this.http.post<void>(URL_API + '/product/cart-update' + '?id=' + cartDto.id, cartDto);
  }
}
