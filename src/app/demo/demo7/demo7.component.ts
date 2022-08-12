import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  redirection() {
    this.router.navigate(['demo/demo4'])
  }
}
