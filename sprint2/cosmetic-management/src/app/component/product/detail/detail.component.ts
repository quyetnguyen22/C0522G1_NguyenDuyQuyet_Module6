import {Component, OnInit} from '@angular/core';

declare function detail(): void;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  val2: number = 3;

  constructor() {
  }

  ngOnInit(): void {
    detail();
  }

}
