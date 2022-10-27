import { Component, OnInit } from '@angular/core';
import { ConsoapiService } from 'src/app/services/consoapi.service';
import { detailPokemon, listbrutPokemon, listpokemon } from './pokemon.model';

@Component({
  selector: 'app-poke-api',
  templateUrl: './poke-api.component.html',
  styleUrls: ['./poke-api.component.scss'],
})
export class PokeAPIComponent implements OnInit {
  listPokemon: listbrutPokemon;
  pokemon: detailPokemon = null;
  pokemonAfficher: number = 0;

  constructor(private service: ConsoapiService) {}

  ngOnInit(): void {
    this.service
      .getPokemons(this.pokemonAfficher)
      .subscribe((response: listbrutPokemon) => {
        this.listPokemon = response;
      });
  }

  changeView(url: string) {
    this.service
      .getPokemon(url)
      .subscribe((response: detailPokemon) => {
      this.pokemon = response;
    });
  }

  loadOther(url : string) {
    this.service
      .getPokemon(url)
      .subscribe((response: listbrutPokemon) => {
        this.listPokemon = response;
      });
  }
}
