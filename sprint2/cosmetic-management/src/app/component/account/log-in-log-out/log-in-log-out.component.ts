import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AccountService} from "../../../service/account.service";

declare var jQuery: any;

@Component({
  selector: 'app-log-in-log-out',
  templateUrl: './log-in-log-out.component.html',
  styleUrls: ['./log-in-log-out.component.css']
})
export class LogInLogOutComponent implements OnInit {

  formSign!: FormGroup;
  formSigup!: FormGroup;

  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('.sign-up').on('click', function () {

          if ($(".sign-in").hasClass("active")) {

            $('.info-state').addClass('right');
            $('.form-input').addClass('slide');
            $('.sign-in').toggleClass('active');
            $('.sign-up').toggleClass('active');

          }

        });

        $('.sign-in').on('click', function () {

          if ($(".sign-up").hasClass("active")) {

            $('.info-state').removeClass('right');
            $('.form-input').removeClass('slide');
            $('.sign-in').toggleClass('active');
            $('.sign-up').toggleClass('active');

          }

        });

        $('.tabIgnore').keydown(function (e: { keyCode: number; preventDefault: () => void; }) {
          if (e.keyCode === 9) {
            e.preventDefault();
            e.preventDefault();
          }
        });
      });
    })(jQuery);

    this.formSign = this.fb.group({
      username: [''],
      password: ['']
    });

    this.formSigup = this.fb.group({
      username: [''],
      formConfirm: new FormGroup({
        password: new FormControl(),
        confirmPassword: new FormControl()
      })

    })
  }

  submit() {
    this.accountService.requestLogin(this.formSign.value).subscribe(value => {

    })
  }

  register() {

  }
}
