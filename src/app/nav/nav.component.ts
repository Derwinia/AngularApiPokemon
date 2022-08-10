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
        {title : "Bindings", url : "demo/demo1"}
      ]}
    ]
  }

}
