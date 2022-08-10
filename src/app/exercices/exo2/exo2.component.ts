import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  listeArticle : string[] = []

  newArticle! : string

  constructor() { }

  ngOnInit(): void {
  }

  ajoutArticle() {
    this.listeArticle.push(this.newArticle)
    this.newArticle = ""
  }

  supprimerArticle(index : number) {
    this.listeArticle.splice(index, 1)
  }

}
