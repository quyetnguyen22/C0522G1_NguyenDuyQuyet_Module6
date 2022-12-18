import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { BehaviorSubject, Observable, window } from 'rxjs';
import { CartDto } from '../../../dto/cart-dto';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

declare function cart(): any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList$: Observable<CartDto[]> | undefined;
  totalBill: number | undefined;
  payPalConfig: IPayPalConfig;
  constructor(
    private productService: ProductService,
    private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    cart();
    scrollTo(0, 0);
    this.getAllInCart();
    this.getTotalBill();
    this.initConfig();
    this.primengConfig.ripple = true;
  }
  getAllInCart() {
    this.productService.getCartList().subscribe((value) => {
      if (value == null) {
        this.router.navigateByUrl('');
      }
      console.log(value);
      this.cartList$ = new BehaviorSubject<CartDto[]>(value);
    });
  }

  getTotalBill() {
    this.productService.getTotalBill().subscribe((value) => {
      console.log(value);
      this.totalBill = value.totalBill;
    });
  }

  updateQty(cart: CartDto) {
    console.log(cart);
    this.productService.updateQty(cart).subscribe((value) => {
      this.ngOnInit();
    });
  }

  removeProduct(product: CartDto) {
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
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'EUR',
                value: '9.99',
                breakdown: {
                  item_total: {
                    currency_code: 'EUR',
                    value: '9.99',
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      // onClientAuthorization: (data) => {
      //   console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      //   this.showSuccess = true;
      // },
      // onCancel: (data, actions) => {
      //   console.log('OnCancel', data, actions);
      //   this.showCancel = true;
      //
      // },
      // onError: err => {
      //   console.log('OnError', err);
      //   this.showError = true;
      // },
      // onClick: (data, actions) => {
      //   console.log('onClick', data, actions);
      //   this.resetStatus();
      // }
    };
  }
}
