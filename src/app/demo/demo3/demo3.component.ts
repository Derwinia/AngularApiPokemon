import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  isVisible : boolean = false

  liste : string[] = ["Arthur", "Perceval", "Merlin", "Leodagan"]

  maValeur! : string

  constructor() { }

  ngOnInit(): void {
  }

  switchVisible() {
    this.isVisible = !this.isVisible
  }

}
