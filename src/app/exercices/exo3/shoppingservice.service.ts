import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingserviceService {

  articleList : Article[] = []

  constructor() { }

  remove(index : number){
    this.articleList.splice(index, 1)
  }

  add(nom : string) {
    let index = this.articleList.findIndex(a => a.nom == nom)
    if(index == -1) this.articleList.push({nom : nom, quantite : 1})
    else {
      this.addQty(index)
    }
  }

  addQty(index : number){
    this.articleList[index].quantite +=1
  }

  remQty(index : number) {
    this.articleList[index].quantite -= 1
    if(this.articleList[index].quantite < 1) this.remove(index)
  }
}
