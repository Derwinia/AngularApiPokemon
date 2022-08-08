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


  constructor() {
   }

  ngOnInit(): void {
    for(let i = 0; i < 10; i++) {
      console.log(i);
    }
  }

}

export class Client {
  id! : number
  name! : string
}
