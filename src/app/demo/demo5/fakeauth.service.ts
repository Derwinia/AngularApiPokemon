import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isAuth! : boolean
  constructor() { }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }
}
