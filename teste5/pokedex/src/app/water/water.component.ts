import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss']
})
export class WaterComponent implements OnInit {

  public pokemons = [];
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons = this._pokemonService.getWater();
  }

}
