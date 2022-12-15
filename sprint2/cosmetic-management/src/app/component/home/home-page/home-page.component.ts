import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService, PrimeNGConfig} from "primeng/api";
import {ProductDto} from "../../../dto/product-dto";
import {ProductService} from "../../../service/product.service";
import {BehaviorSubject, Observable} from "rxjs";
import {CartDto} from "../../../dto/cart-dto";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productList$: Observable<ProductDto[]> | undefined;
  total: number | undefined;
  name = '';
  size = 4;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(private productService: ProductService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.items = [
      {label: 'Computer'},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Backpacks'},
      {label: 'Item'}
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
    this.getAllProduct();
    this.primengConfig.ripple = true;
  }

  getAllProduct() {
    this.productService.getProductList(this.size, this.name).subscribe(value => {
      console.log(value)
      this.productList$ = new BehaviorSubject<ProductDto[]>(value.content);
      this.total = value.totalElements;
      console.log(this.productList$)
    })
  }

  viewMore() {
    this.size += 4;
    this.getAllProduct()
  }

  addToCart(item: CartDto) {
    this.productService.updateCart(item).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Add successfully'});
    })
  }
}
