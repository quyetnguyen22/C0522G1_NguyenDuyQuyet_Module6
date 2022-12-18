import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import {AuthService} from "../../service/auth.service";
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  countProduct: number | undefined;
  isSignedIn = localStorage.getItem('auth-user');

  constructor(private productService: ProductService
              ,private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.getTotal();
  }

  getTotal() {
    this.productService.getTotalBill().subscribe((value) => {
      console.log(value);
      this.countProduct = value.countProduct;
    });
  }

  signOut() {
    this.tokenStorageService.logOut();
    window.location.replace('');
  }
}
