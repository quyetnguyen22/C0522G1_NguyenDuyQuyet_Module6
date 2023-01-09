import { Component, Input, OnInit } from '@angular/core';
import { PenaltyService } from '../../service/penalty.service';
import {AuthService} from "../../service/auth.service";
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  countProduct: number | undefined;
  username: string | undefined;

  constructor(private productService: PenaltyService
              ,private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser().username;
  }

  signOut() {
    this.tokenStorageService.logOut();
    window.location.replace('');
  }
}
