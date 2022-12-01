import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {RoomService} from "../../service/room.service";
import {Room} from "../../../model/show-time/Room";
import {TimesService} from "../../service/times.service";
import {Times} from "../../../model/show-time/Times";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  formAddMovie: FormGroup | undefined;
  formAddShowTime: FormArray | undefined;
  roomList: Room[] = [];
  timeList: Times[] = [];

  constructor(private fb: FormBuilder,
              private roomService: RoomService,
              private timeService: TimesService) {
  }

  ngOnInit(): void {
    this.getAllRoom();
    this.getAllTime();
    this.formAddMovie = this.fb.group({
      name: [],
      image: [],
      startDay: [],
      endDay: [],
      director: [],
      filmTime: [],
      trailer: [],
      content: [],
      filmStudio: [],
      actor: [],
      version: [],
      movieType: [],
      showTime: this.fb.array(
        [
          this.fb.group({
            room: [],
            time: [],
            dateProjection: []
          })
        ]
      )
    });
    this.formAddShowTime = this.formAddMovie.controls['formAddShowTime'] as FormArray;
  }

  addMoreShowTime(): void {
    const formAddShowTime = this.fb.group({
      room: [],
      time: [],
      dateProjection: []
    });
    this.formAddShowTime?.push(formAddShowTime)
  }

  getAllRoom() {
    this.roomService.getAllRoom().subscribe(value => {
      this.roomList = value;
      console.log(value);
    });
  }

  getAllTime(){
    this.timeService.getAllTime().subscribe(value => {
      this.timeList = value;
      console.log(value);
    });
  }
}
