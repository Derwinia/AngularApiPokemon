import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  prop1 : string = "Arthur Cuillère !"
  prop2 : number = 12.4745
  prop3 : Date = new Date()

  eur : number = 1000000

  constructor() { }

  ngOnInit(): void {
  }

}
