import { Injectable } from '@angular/core';
import { Account } from '../model/account';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  logOut() {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveTokenLocal(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public saveTokenSession(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    if (localStorage.getItem(TOKEN_KEY) !== null) {
      return <string>localStorage.getItem(TOKEN_KEY);
    } else {
      return <string>sessionStorage.getItem(TOKEN_KEY);
    }
  }

  public getUser() {
    if (localStorage.getItem(USER_KEY) !== null) {
      // @ts-ignore
      return JSON.parse(localStorage.getItem(USER_KEY)!)
    } else {
      // @ts-ignore
      return JSON.parse(sessionStorage.getItem(USER_KEY)!);
    }
  }

  public saveUserLocal(user: Account) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}
