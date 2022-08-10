import { FakeauthService } from './fakeauth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit, OnDestroy {

  localIsAuth! : boolean

  constructor(
    private authService : FakeauthService
  ) {
    console.log("je me construis")
  }

  ngOnInit(): void {
    console.log("je m'initialise")
    this.localIsAuth = this.authService.isAuth
  }

  ngOnDestroy(): void {
    console.log("je me détruis")
  }

  connexion() {
    this.authService.login()
    this.localIsAuth = this.authService.isAuth

  }

  deconnexion() {
    this.authService.logout()
    this.localIsAuth = this.authService.isAuth

  }
}
