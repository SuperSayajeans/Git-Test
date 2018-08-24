import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss']
})
export class FireComponent implements OnInit {
  public pokemons = [];
  private _pokemon_obs: Observable<string[]>;
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this._pokemon_obs = < Observable<string[]> > this._pokemonService.getFire();
    this._pokemon_obs.subscribe( (data) => this.pokemons = data );
  }
}
