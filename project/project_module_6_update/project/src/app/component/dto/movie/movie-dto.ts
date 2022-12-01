import {MovieType} from "../../../model/movie/MovieType";
import {ShowTime} from "../../../model/show-time/show-time";

export interface MovieDto {
  id?: number,
  name?: string,
  image?: string,
  startDay?: string,
  endDay?: string,
  director?: string,
  filmTime?: string,
  trailer?: string,
  content?: string,
  filmStudio?: string,
  actor?: string,
  version?: string
  movieType?: MovieType,
  showTime?:ShowTime;
}
