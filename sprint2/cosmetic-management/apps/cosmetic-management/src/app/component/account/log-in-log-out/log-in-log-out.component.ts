import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { TokenStorageService } from '../../../service/token-storage.service';

declare var jQuery: any;

@Component({
  selector: 'app-log-in-log-out',
  templateUrl: './log-in-log-out.component.html',
  styleUrls: ['./log-in-log-out.component.css'],
})
export class LogInLogOutComponent implements OnInit {
  formSign!: FormGroup;
  formSigup!: FormGroup;
  username: string;
  roles: string[] = [];
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private formBuild: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scroll(0,0)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    (function ($) {
      $(document).ready(function () {
        $('.sign-up').on('click', function () {
          if ($('.sign-in').hasClass('active')) {
            $('.info-state').addClass('right');
            $('.form-input').addClass('slide');
            $('.sign-in').toggleClass('active');
            $('.sign-up').toggleClass('active');
          }
        });

        $('.sign-in').on('click', function () {
          if ($('.sign-up').hasClass('active')) {
            $('.info-state').removeClass('right');
            $('.form-input').removeClass('slide');
            $('.sign-in').toggleClass('active');
            $('.sign-up').toggleClass('active');
          }
        });

        $('.tabIgnore').keydown(function (e: {
          keyCode: number;
          preventDefault: () => void;
        }) {
          if (e.keyCode === 9) {
            e.preventDefault();
            e.preventDefault();
          }
        });
      });
    })(jQuery);

    this.formSign = this.fb.group({
      username: [''],
      password: [''],
    });

    this.formSigup = this.fb.group({
      username: [''],
      formConfirm: new FormGroup({
        password: new FormControl(),
        confirmPassword: new FormControl(),
      }),
    });

    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.authService.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
  }

  submit() {
    this.authService.login(this.formSign.value).subscribe((data) => {
      console.log(data);
      this.tokenStorageService.saveTokenSession(data.accessToken);
      this.tokenStorageService.saveUserLocal(data.accessToken);
      // this.tokenStorageService.saveUserLocal(data);
      this.authService.isLoggedIn = true;
      this.username = this.tokenStorageService.getUser().username;
      this.roles = this.tokenStorageService.getUser().roles;
      this.formSign.reset();
      window.location.replace('');
    });
  }

  exit() {
    this.router.navigateByUrl('');
  }

  logOut(): void {
    // this.authSocialService.signOut().then(
    //   data => {
        this.tokenStorageService.logOut();
        this.router.navigateByUrl('');
    //   }
    // );
  }
  register() {}
}
