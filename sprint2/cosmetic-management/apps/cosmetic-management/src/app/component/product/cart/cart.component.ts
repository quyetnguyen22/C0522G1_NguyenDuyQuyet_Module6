import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { BehaviorSubject, Observable, window } from 'rxjs';
import { CartDto } from '../../../dto/cart-dto';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import {TokenStorageService} from "../../../service/token-storage.service";
import {ProductDto} from "../../../dto/product-dto";

declare function cart(): any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList$: Observable<CartDto[]> | undefined;
  // cartList: ProductDto;
  totalBill: number | undefined;
  payPalConfig: IPayPalConfig;
  username: string;
  constructor(
    private productService: ProductService,
    private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser().username;
    cart();
    scrollTo(0, 0);
    this.getAllInCart();
    this.getTotalBill();
    this.initConfig();
    this.primengConfig.ripple = true;
  }
  getAllInCart() {
    // this.cartList = this.tokenStorageService.getCartList();
    // console.log(this.cartList);
    this.productService.getCartList(this.username).subscribe((value) => {
      if (value == null) {
        this.router.navigateByUrl('');
      }
      console.log(value);
      this.cartList$ = new BehaviorSubject<CartDto[]>(value);
    });
  }

  getTotalBill() {
    this.productService.getTotalBill(this.username).subscribe((value) => {
      console.log(value);
      this.totalBill = value.totalBill;
    });
  }

  updateQty(cart: CartDto) {
    console.log(cart);
    this.productService.updateQty(cart, this.username).subscribe((value) => {
      this.getAllInCart();
      this.getTotalBill();
    });
  }

  removeProduct(product: ProductDto) {
    // this.tokenStorageService.removeCartList();
    this.productService.removeProduct(product.id).subscribe((value) => {
      this.ngOnInit();
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'Delete successfully',
      });
    });
  }

  private initConfig(): void {

    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AcuKQEMia2nn12ZZBn3on0voZf4uFmsrYv-p4jyrDrp5qHACqztRmYTEjKlbvyDujQ63oTG4gPX6wscJ',
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'horizontal',
        size: 'responsive',
        shape: 'pill',
        color: 'gold',
      },
      createOrderOnClient: (data) => <ICreateOrderRequest>{

        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '1',
            // breakdown: {
            //   item_total: {
            //     currency_code: 'EUR',
            //     value: '9.99'
            //   }
            // }
          },
          // items: [{
          //   name: 'Enterprise Subscription',
          //   quantity: '1',
          //   category: 'DIGITAL_GOODS',
          //   unit_amount: {
          //     currency_code: 'EUR',
          //     value: '8.99',
          //   },
          // }]
        }]
      },
      onApprove: (data, actions) => {
      },
      onClientAuthorization: (data) => {
      },
      onCancel: (data, actions) => {
      },
      onError: err => {
      },
      onClick: (data, actions) => {
      },
    };
  }
}
