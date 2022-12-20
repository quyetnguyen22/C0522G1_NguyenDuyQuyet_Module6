import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from '../dto/product-dto';
import {environment} from '../../environments/environment';
import {DataContent} from '../model/data-content';
import {CartDto} from '../dto/cart-dto';
import {TokenStorageService} from "./token-storage.service";

const URL_API = `${environment.url}`;

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  httpOptions: any;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) {

  }

  getProductList(pageSize: number, name: string): Observable<DataContent<ProductDto>> {
    return this.http.get<DataContent<ProductDto>>(URL_API + '/product/list?name=' + name + '&size=' + pageSize);
  }

  getWomenList(pageSize: number, name: string): Observable<DataContent<ProductDto>> {
    return this.http.get<DataContent<ProductDto>>(
      URL_API + '/product/women-list?name=' + name + '&size=' + pageSize
    );
  }

  getCartList(username: string): Observable<CartDto[]> {
    return this.http.get<CartDto[]>(URL_API + '/product/cart' + '?username=' + username);
  }

  getTotalBill(username: string): Observable<CartDto> {
    return this.http.get<CartDto>(URL_API + '/product/total-bill' + '?username=' + username);
  }

  updateCart(productDto: ProductDto, username: string): Observable<void> {
    return this.http.post<void>(
      URL_API + '/product/cart-update' + '?id=' + productDto.id + '&username=' + username,
      productDto
    );
  }

  updateQty(cartDto: CartDto, username: string): Observable<void> {
    return this.http.patch<void>(
      URL_API + '/product/qty-update' + '?id=' + cartDto.id + '&qty=' + cartDto.qty + '&username=' + username, cartDto);
  }

  removeProduct(id: number | undefined): Observable<any> {
    return this.http.delete<any>(
      URL_API + '/product/del-product' + '?id=' + id
    );
  }
}
