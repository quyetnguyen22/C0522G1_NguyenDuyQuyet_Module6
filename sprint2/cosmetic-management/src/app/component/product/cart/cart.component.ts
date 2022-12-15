import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {BehaviorSubject, Observable} from "rxjs";
import {CartDto} from "../../../dto/cart-dto";

declare function cart(): any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList$: Observable<CartDto[]> | undefined;
  totalBill: number | undefined;
  qtys: number | undefined;
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    cart();
    this.getAllInCart();
    this.getTotalBill()
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
      this.qtys = value.qty;
      this.totalBill = value.totalBill;
    })
  }
}
