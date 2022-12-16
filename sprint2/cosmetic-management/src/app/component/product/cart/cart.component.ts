import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {BehaviorSubject, Observable, window} from "rxjs";
import {CartDto} from "../../../dto/cart-dto";
import {MessageService, PrimeNGConfig} from "primeng/api";

declare function cart(): any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList$: Observable<CartDto[]> | undefined;
  totalBill: number | undefined;
  constructor(private productService: ProductService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    cart();
    this.getAllInCart();
    this.getTotalBill()
    this.primengConfig.ripple = true;
  }

  getAllInCart(){
    this.productService.getCartList().subscribe(value => {
      console.log(value)
      this.cartList$ = new BehaviorSubject<CartDto[]>(value);
    })
  }

  getTotalBill(){
    this.productService.getTotalBill().subscribe(value => {
      console.log(value)
      this.totalBill = value.totalBill;
    })
  }

  updateQty(cart: CartDto) {
    console.log(cart)
    this.productService.updateQty(cart).subscribe(value => {
      this.ngOnInit();
    })
  }

  removeProduct(product: CartDto) {
    this.productService.removeProduct(product.id).subscribe(value => {
      this.ngOnInit();
      this.messageService.add({severity: 'error', summary: 'error', detail: 'Delete successfully'});
    })

  }
}
