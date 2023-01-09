import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PenaltyDto} from '../../../dto/penalty-dto';
import {PenaltyService} from '../../../service/penalty.service';
import {BehaviorSubject, Observable} from "rxjs";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Team} from "../../../dto/team";

@Component({
  selector: 'app-penalties',
  templateUrl: './penalties-page.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
  styleUrls: ['./penalties-page.component.scss'],
})
export class PenaltiesPageComponent implements OnInit {
  dialog: boolean | undefined;
  // @ts-ignore
  penaltyForm: FormGroup;
  penalties: PenaltyDto[] | undefined;
  totalElements: number | undefined;
  penalty: PenaltyDto | undefined;

  selectedPenalties: PenaltyDto[] | undefined;

  submitted: boolean | undefined;
  teams: Team[] = [];
  name = '';
  size = 10;
  _page = 0;

  curDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

  constructor(private penaltyService: PenaltyService,
              private messageService: MessageService,
              private fb: FormBuilder,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.getPenalties();
  }

  getPenalties() {
    console.log('call')
    this.penaltyService
      .getPenalties(this.size, this.name, this._page)
      .subscribe((value) => {
        console.log(value);
        this.penalties = value.content;
        this.totalElements = value.totalElements;
        console.log('p ', this.penalties);
        console.log('record ', this.totalElements);
      });
  }

  openNew() {
    // this.product = {};
    this.submitted = false;
    this.dialog = true;
    this.penaltyForm = this.fb.group({
      id: [],
      name: ['', [Validators.required,Validators.pattern('^([A-Z][^0-9@*&%#!<>]+[ ][^0-9@*&%#!<>]+)$')]],
      playerCode: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required, Validators.pattern('[0-9]{2}/[0-9]{2}/([0-9]{4})'), this.checkAge]],
      team: ['', [Validators.required]]
    })
    this.getAllTeams();
  }

  checkAge(abstractControl: AbstractControl): any {
    const formYear = Number(new Date(abstractControl.value).getFullYear());
    // const formMonth = Number(new Date(abstractControl.value).getMonth() + 1);
    // const formDay = Number(new Date(abstractControl.value).getDate());
    if (new Date().getFullYear() - formYear > 16) {
      return null;
    } else {
      return {invalidAge: true};
    }

    // if (formYear < new Date().getFullYear()) {
    //   return {invalidStartDate: true};
    // }
    //
    // if (formMonth > new Date().getMonth() + 1) {
    //   return null;
    // }
    //
    // if (formMonth < new Date().getMonth() + 1) {
    //   return {invalidStartDate: true};
    // }
    //
    // return (formDay >= new Date().getDate()) ? null : {invalidStartDate: true};
  }

  getAllTeams() {
    this.penaltyService.getAllTeams().subscribe(value => {
      this.teams = value;
      console.log('team', this.teams);
    });
  }
  hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }

  deleteSelectedPenalties() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('chosen', this.selectedPenalties);
        this.penaltyService.deleteSelectedPenalties(this.selectedPenalties).subscribe(value => {
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
          this.getPenalties();
        })
      }
    });
  }

  deletePenalty(penalty: PenaltyDto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + penalty.penaltyCode + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.penaltyService.deletePenalty(penalty.id).subscribe((value) => {
          console.log(penalty.id);
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          this.getPenalties();
        });

      }
    });
  }


  savePlayer() {
    this.submitted = true;
    const product = this.penaltyForm.value;
    console.log(product.id)
    if (product.id == null){
      this.penaltyService.savePlayer(product).subscribe(value => {
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product added', life: 3000});
      })
    }
    // else {
    //   this.penaltyService.editProduct(product).subscribe(value => {
    //     this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product edited', life: 3000});
    //   })
    // }

  }

  goToPage(event: any) {
    console.log(event.page);
    this._page = event.page;
    this.getPenalties();
  }

  resetSearchInput() {
    this.name = '';
    this.getPenalties();
  }

  // editProduct(product: ProductDto) {
  //   this.productDialog = true;
  //   console.log(product);
  //   this.productForm = this.fb.group({
  //     id: [''],
  //     name: ['', [Validators.required]],
  //     price: ['', [Validators.required]],
  //     producer: ['', [Validators.required]],
  //     descriptions: ['']
  //   });
  //   this.productForm.patchValue(product);
  //   // this.productService.editProduct(product).subscribe(value => {
  //   //   this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
  //   //   this.getProducts();
  //   //   this.productDialog = false;
  //   // })
  // }
  //
}
