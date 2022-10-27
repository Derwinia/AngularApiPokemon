import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsoapiService {

  constructor(
    private client : HttpClient
  ) { }

  getPokemons(id:number){
    return this.client.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${id}`)
  }

  getPokemon(url:string){
    return this.client.get(url)
  }

}
