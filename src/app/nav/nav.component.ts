import { Component, OnInit } from '@angular/core';
import { FakeauthService } from '../demo/demo5/fakeauth.service';
import { Link } from '../models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  mesLiens! : Link[]

  localIsAuth : boolean
  constructor(
    private authService : FakeauthService
  ) { }

  ngOnInit(): void {
    this.authService.isAuthSubject.subscribe({
      next : (data : boolean) => { this.localIsAuth = data} ,
      error : () => {} ,
      complete : () => {}
    })
    this.mesLiens = [
      {title : "Home", url : "home"},
      {title : "Demos", children : [
        {title : "Bindings", url : "demo/demo1"},
        {title : "Pipes", url : "demo/demo2"},
        {title : "Directives", url : "demo/demo3"},
        {title : "@Input/@Output", url : "demo/demo4"},
        {title : "Services et injection", url : "demo/demo5"},
        {title : "Reactive forms", url : "demo/demo6"},
        {title : "Routing", url : "demo/demo7"},
        {title : "Guard", url : "demo/demo8"},
        {title : "Conso api", url : 'demo/demo9'}
      ]},
      {title : "Exercices", children : [
        {title : "Chronomètre", url : "exercice/exo1"},
        {title : "Shopping List", url : "exercice/exo2"},
        {title : "Shopping List++", url : "exercice/exo3"},
      ]},
      {title : "Poke-API", url : "pokeAPI"},
    ]
  }

  toggleChildrenVisible(index : number) {
    this.mesLiens[index].isChildrenVisible = !this.mesLiens[index].isChildrenVisible
  }

}
