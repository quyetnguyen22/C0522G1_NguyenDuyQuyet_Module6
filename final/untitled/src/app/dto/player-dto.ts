import {Validators} from "@angular/forms";
import {Team} from "./team";

export interface PlayerDto {
  id?: number;
  name?: string;
  playerCode?: string;
  dateOfBirth?: string;
  team?: Team;
}
