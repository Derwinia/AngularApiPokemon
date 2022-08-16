import { Component, OnInit } from '@angular/core';
import { FakeauthService } from './demo/demo5/fakeauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  localIsAuth : boolean

  constructor(
    private authService : FakeauthService
  ) {}
  ngOnInit(): void {
    this.authService.isAuthSubject.subscribe({
      next : (data : boolean) => { this.localIsAuth = data} ,
      error : () => {} ,
      complete : () => {}
    })
  }
  title = 'TBNet_Demo';
}
