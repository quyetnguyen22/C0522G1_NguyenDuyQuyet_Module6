import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-log-in-log-out',
  templateUrl: './log-in-log-out.component.html',
  styleUrls: ['./log-in-log-out.component.css']
})
export class LogInLogOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        $('.sign-up').on('click', function(){

          if($( ".sign-in" ).hasClass( "active")){

            $('.info-state').addClass('right');
            $('.form-input').addClass('slide');
            $('.sign-in').toggleClass('active');
            $('.sign-up').toggleClass('active');

          }

        });

        $('.sign-in').on('click', function(){

          if($( ".sign-up" ).hasClass( "active")){

            $('.info-state').removeClass('right');
            $('.form-input').removeClass('slide');
            $('.sign-in').toggleClass('active');
            $('.sign-up').toggleClass('active');

          }

        });

        $('.tabIgnore').keydown(function(e: { keyCode: number; preventDefault: () => void; }) {
          if (e.keyCode === 9) {
            e.preventDefault();
            e.preventDefault();
          }
        });
      });
    })(jQuery);
  }

}
