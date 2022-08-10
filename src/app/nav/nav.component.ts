import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  mesLiens! : Link[]

  constructor() { }

  ngOnInit(): void {
    this.mesLiens = [
      {title : "Home", url : "home"},
      {title : "Demos", children : [
        {title : "Bindings", url : "demo/demo1"},
        {title : "Pipes", url : "demo/demo2"},
        {title : "Directives", url : "demo/demo3"}
      ]},
      {title : "Exercices", children : [
        {title : "Chronomètre", url : "exercice/exo1"}
      ]}
    ]
  }

  toggleChildrenVisible(index : number) {
    this.mesLiens[index].isChildrenVisible = !this.mesLiens[index].isChildrenVisible
  }

}
