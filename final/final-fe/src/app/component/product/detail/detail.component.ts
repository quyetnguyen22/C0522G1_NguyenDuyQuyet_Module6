import { Component, OnInit } from '@angular/core';
import {ProducerDto} from "../../../dto/producer-dto";
import {BrandDto} from "../../../dto/brand-dto";
import {CosmeticTypeDto} from "../../../dto/cosmetic-type-dto";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../../service/token-storage.service";
import {Title} from "@angular/platform-browser";
import {ProductDto} from "../../../dto/product-dto";
import {MessageService, PrimeNGConfig} from "primeng/api";

declare function detail(): void;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  cosmetic: ProductDto;
  username: string;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig,
              private title: Title) {
    this.username = this.tokenStorageService.getUser().username;
    title.setTitle('Cosmetic Detail');
  }

  ngOnInit(): void {
    this.getCosmeticById();
  }

  getCosmeticById(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.productService.findCosmeticById(id).subscribe(value => {
        this.cosmetic = value;
      },
      error => {
        console.log(error);
      });
  }

  addToCart(item: ProductDto) {
    console.log(this.username);
    this.productService.updateCart(item, this.username).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Add successfully',
      });
    });
  }
}
