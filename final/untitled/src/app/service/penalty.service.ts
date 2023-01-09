import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PenaltyDto} from '../dto/penalty-dto';
import {DataContent} from '../model/data-content';
import {TokenStorageService} from "./token-storage.service";
import {Team} from "../dto/team";
import {PlayerDto} from "../dto/player-dto";

const URL_API = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class PenaltyService {

  httpOptions: any;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) {

  }
  getPenalties(pageSize: number | undefined, name: string, page: number): Observable<DataContent<PenaltyDto>> {
    console.log(URL_API + '/penalty/list?name=' + name + '&size=' + pageSize + '&page=' + page)
    return this.http.get<DataContent<PenaltyDto>>(URL_API + '/penalty/list?name=' + name + '&size=' + pageSize +
      '&page=' + page);
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(URL_API + '/penalty/teams');
  }



  deletePenalty(id: number | undefined): Observable<void> {
    return this.http.delete<void>(
      URL_API + '/penalty/del-penalty' + '?id=' + id
    );
  }

  deleteSelectedPenalties(penalty: PenaltyDto[] | undefined): Observable<void> {
    return this.http.patch<void>(
      URL_API + '/penalty/del-selected-penalty', penalty
    );
  }

  savePlayer(player: PlayerDto): Observable<void> {
    return this.http.post<void>(
      URL_API + '/penalty/add-player', player
    );
  }
  //
  // editProduct(product: ProductDto): Observable<void> {
  //   return this.http.patch<void>(URL_API + '/product/edit', product);
  // }

}
