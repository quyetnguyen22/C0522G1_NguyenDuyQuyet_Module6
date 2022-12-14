import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TicketService} from '../../../service/ticket.service';
import Swal from 'sweetalert2';
import {ITicketTyDto} from '../../../dto/iticket-ty-dto';
import {TokenStorageService} from '../../../service/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking-ticket-list',
  templateUrl: './booking-ticket-list.component.html',
  styleUrls: ['./booking-ticket-list.component.css']
})
export class BookingTicketListComponent implements OnInit {


  nameDelete: string;
  idDelete: number;
  page = 1;
  pageSize = 5;
  total$: Observable<number>;
  ticketDto$: Observable<ITicketTyDto[]>;
  action: boolean;
  customerName = '';
  customer: ITicketTyDto[];
  totalPoint = '';
  price: number;
  customerTypeName: number;
  private username: string;

  constructor(private tokenService: TokenStorageService,
              private ticketService: TicketService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.showListBookingTicket();
    this.findByCustomerNameAndPoint();


  }


  findByCustomerNameAndPoint() {
    this.ticketService.findByCustomerNameAndPoint().subscribe(value => {
      console.log(value);
      this.customerName = value.customerName;
      this.totalPoint = value.totalPoint;
      this.customerTypeName = value.customerTypeId;
      console.log(this.customerTypeName);
    });
  }

  showListBookingTicket() {
    this.ticketService.showListBookingTicket(this.page, this.pageSize).subscribe(value => {
        console.log(value);
        if (value != null) {
          this.action = true;
          this.ticketDto$ = new BehaviorSubject<ITicketTyDto[]>(value.content);
          this.total$ = new BehaviorSubject<number>(value.totalElements);
        } else {
          this.action = false;

        }
      },
      error => {
      });
  }

  confirmDelete(value) {
    const timeBook = new Date(value.bookingTime);
    const now = new Date();
    if (new Date().getTime() - new Date(value.bookingTime).getTime() >= 30 * 60 * 1000) {
      Swal.fire({
        title: 'Kh??ng th??? h???y v??!',
        text: 'Th???i gian ?????t v?? qu?? 30 ph??t.',
        icon: 'warning',
        showCancelButton: false,
        cancelButtonColor: '#d33',
        cancelButtonText: 'H???y B???',
      });
    } else {
      this.idDelete = value.ticketId;
      this.nameDelete = value.movieName;
      console.log(this.idDelete);
      Swal.fire({
        title: 'B???n c?? mu???n x??a ' + this.nameDelete + '?',
        text: 'T??c v??? n??y kh??ng th??? ho??n t??c !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '?????ng ??',
        cancelButtonText: 'H???y B???',
      }).then((result) => {
        if (result.isConfirmed) {
          this.ticketService.deleteTicket(this.idDelete).subscribe(value1 => {
            console.log(this.idDelete);
            Swal.fire(
              '???? x??a!',
              'Th??ng tin n??y ???? ???????c x??a.'
            );
            this.ngOnInit();
          });
        }
      });
    }
  }

  whenLogout() {
    this.tokenService.logOut();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: ' ????ng xu???t th??nh c??ng !',
      showConfirmButton: false,
      timer: 1000
    });
    this.router.navigateByUrl('');
    this.reload();
  }

  reload() {
    window.location.reload();
  }
}
