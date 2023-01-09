import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProductDto} from '../../../dto/product-dto';
import {ProductService} from '../../../service/product.service';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  productDialog: boolean;

  productList$: Observable<ProductDto[]> | undefined;
  total: number | undefined;

  product: ProductDto;

  selectedProducts: ProductDto[];

  submitted: boolean;

  name = '';
  size = 4;

  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {

  }

  getProducts() {
    this.productService
      .getProducts(this.size, this.name)
      .subscribe((value) => {
        console.log(value);
        this.productList$ = new BehaviorSubject<ProductDto[]>(value.content);
        this.total = value.totalElements;
        console.log(this.productList$);
      });
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  // deleteSelectedProducts() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete the selected products?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.products = this.products.filter(val => !this.selectedProducts.includes(val));
  //       this.selectedProducts = null;
  //       this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
  //     }
  //   });
  // }

  editProduct(product: ProductDto) {
    this.product = {...product};
    this.productDialog = true;
  }

  // deleteProduct(product: ProductDto) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.name + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.products = this.products.filter(val => val.id !== product.id);
  //       this.product = {};
  //       this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
  //     }
  //   });
  // }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  // saveProduct() {
  //   this.submitted = true;
  //
  //   if (this.product.name.trim()) {
  //     if (this.product.id) {
  //       this.products[this.findIndexById(this.product.id)] = this.product;
  //       this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
  //     } else {
  //       this.product.id = this.createId();
  //       this.product.imageLink = 'product-placeholder.svg';
  //       this.products.push(this.product);
  //       this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
  //     }
  //
  //     this.products = [...this.products];
  //     this.productDialog = false;
  //     this.product = {};
  //   }
  // }

  // findIndexById(id: number): number {
  //   let index = -1;
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id === id) {
  //       index = i;
  //       break;
  //     }
  //   }
  //
  //   return index;
  // }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
