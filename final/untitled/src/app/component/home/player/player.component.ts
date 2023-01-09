import {Component, OnInit} from '@angular/core';
import {PenaltyService} from "../../../service/penalty.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Team} from "../../../dto/team";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{
  submitted: boolean | undefined;
  penaltyForm!: FormGroup;
  teams: Team[] = [];
  constructor(private fb: FormBuilder,
              private penaltyService: PenaltyService) {
  }

  ngOnInit(): void {
    this.penaltyForm = this.fb.group({
      id: [],
      name: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      team: ['', [Validators.required]]
    })
    this.getAllTeams();
  }

  getAllTeams() {
    this.penaltyService.getAllTeams().subscribe(value => {
      this.teams = value;
    });
  }
}
