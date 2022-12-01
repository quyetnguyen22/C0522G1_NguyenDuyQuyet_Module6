import {Room} from "./Room";
import {Times} from "./Times";

export interface ShowTime{
  id?: number,
  room?:Room,
  time?: Times,
  dateProjection?: string,
}
