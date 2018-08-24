import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-grass',
  templateUrl: './grass.component.html',
  styleUrls: ['./grass.component.scss']
})
export class GrassComponent implements OnInit {

  public pokemons = [];
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons = this._pokemonService.getGrass();
  }
}
