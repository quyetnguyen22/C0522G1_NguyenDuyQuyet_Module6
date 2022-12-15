import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductDto} from "../../../dto/product-dto";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  productList$: Observable<ProductDto[]> | undefined;
  total: number | undefined;
  name = '';
  size = 4;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getWomenProduct()
  }

  getWomenProduct() {
    this.productService.getWomenList(this.size, this.name).subscribe(value => {
      console.log(value)
      this.productList$ = new BehaviorSubject<ProductDto[]>(value.content);
      this.total = value.totalElements;
      console.log(this.productList$)
    })
  }

  viewMore() {
    this.size += 4;
    this.getWomenProduct()
  }
}
