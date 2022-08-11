import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
import { ShoppingserviceService } from './shoppingservice.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  localArticleList : Article[] = []

  newArticle! : string

  constructor(
    private service : ShoppingserviceService
  ) { }

  ngOnInit(): void {
    this.localArticleList = this.service.articleList
  }

  ajouter() {
    this.service.add(this.newArticle)
  }

  retirer(index : number) {
    this.service.remove(index)
  }

  plusUn(index : number) {
    this.service.addQty(index)
  }

  moinsUn(index : number) {
    this.service.remQty(index)
  }

}
