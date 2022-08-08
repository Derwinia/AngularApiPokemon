import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {


  myprop : string = "arthur";

  constructor() { }

  ngOnInit(): void {
  }

  changeProp(valeur : string) : void {
    this.myprop = valeur;
  }

  switchEnabled() : boolean {
    return this.myprop == "bidule"
  }
}
