import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../dto/product-dto';
import { environment } from '../../environments/environment';
import { DataContent } from '../model/data-content';
import { CartDto } from '../dto/cart-dto';
import {TokenStorageService} from "./token-storage.service";
import {ApiInterceptorService} from "../api-interceptor.service";

const URL_API = `${environment.url}`;
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  httpOptions: any;
  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + this.tokenService.getToken()
    //   }),
    //   'Access-Control-Allow-Origin': 'http://localhost:4200',
    //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    // };

  }

  getProductList(
    pageSize: number,
    name: string
  ): Observable<DataContent<ProductDto>> {
    return this.http.get<DataContent<ProductDto>>(
      URL_API + '/product/list?name=' + name + '&size=' + pageSize
    );
  }

  getWomenList(
    pageSize: number,
    name: string
  ): Observable<DataContent<ProductDto>> {
    return this.http.get<DataContent<ProductDto>>(
      URL_API + '/product/women-list?name=' + name + '&size=' + pageSize
    );
  }

  getCartList(): Observable<CartDto[]> {
    return this.http.get<CartDto[]>(URL_API + '/product/cart');
  }

  getTotalBill(): Observable<CartDto> {
    return this.http.get<CartDto>(URL_API + '/product/total-bill');
  }

  updateCart(productDto: ProductDto): Observable<void> {
    return this.http.post<void>(
      URL_API + '/product/cart-update' + '?id=' + productDto.id,
      productDto
    );
  }

  updateQty(cartDto: CartDto): Observable<void> {
    return this.http.patch<void>(
      URL_API +
        '/product/qty-update' +
        '?id=' +
        cartDto.id +
        '&qty=' +
        cartDto.qty,
      cartDto
    );
  }

  removeProduct(id: number | undefined): Observable<any> {
    return this.http.delete<any>(
      URL_API + '/product/del-product' + '?id=' + id
    );
  }
}
