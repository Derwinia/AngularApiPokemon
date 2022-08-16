import { FakeauthService } from './../demo/demo5/fakeauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  texte : string = "text"
  nombre : number = 5
  date : Date = new Date()
  booleen : boolean = true

  monClient : Client = {id : 1, name : "marcel"}


  private _isAuth! : boolean

  get isAuth() : boolean {
    return JSON.parse(localStorage.getItem("isAuth"))
  }

  set isAuth(value: boolean) {
    this._isAuth = value
  }

  constructor(
    private authService : FakeauthService
  ) {
   }

  ngOnInit(): void {
  }

}

export class Client {
  id! : number
  name! : string
}
