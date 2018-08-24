import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }
  getWater(): string[] {
    return [
      'Alomomola',
      'Basculin',
      'Blastoise',
      'Brionne',
      'Buizel',
      'Castform',
      'Clamperl',
      'Clauncher',
      'Clawitzer',
      'Corphish',
      'Croconaw',
      'Dewott',
      'Feebas',
      'Feraligatr',
      'Finneon',
      'Floatzel',
      'Froakie',
      'Frogadier',
      'Goldeen',
      'Golduck',
      'Gorebyss',
      'Horsea',
      'Huntail',
      'Kingler',
      'Krabby',
      'Kyogre',
      'Lumineon',
      'Luvdisc',
      'Magikarp',
      'Manaphy',
      'Milotic',
      'Mudkip',
      'Octillery',
      'Oshawott',
      'Panpour',
      'Phione',
      'Piplup',
      'Politoed',
      'Poliwag',
      'Poliwhirl',
      'Popplio',
      'Prinplup',
      'Psyduck',
      'Pyukumuku',
      'Remoraid',
      'Samurott',
      'Seadra',
      'Seaking',
      'Seel',
      'Shellder',
      'Shellos',
      'Simipour',
      'Squirtle',
      'Staryu',
      'Suicune',
      'Totodile',
      'Tympole',
      'Vaporeon',
      'Wailmer',
      'Wailord',
      'Wartortle',
      'Wishiwashi'
    ];
  }
  getFire(): Observable<Object> {
    return this._http.get('http://localhost:8000/fire_pokemons.json');
  }
  getGrass(): string[] {
    return [
      'Bayleef',
      'Bellossom',
      'Bounsweet',
      'Cacnea',
      'Carnivine',
      'Cherrim',
      'Cherubi',
      'Chespin',
      'Chikorita',
      'Fomantis',
      'Gogoat',
      'Grotle',
      'Grovyle',
      'Leafeon',
      'Lilligant',
      'Lurantis',
      'Maractus',
      'Meganium',
      'Pansage',
      'Petilil',
      'Quilladin',
      'Sceptile',
      'Seedot',
      'Serperior',
      'Servine',
      'Shaymin',
      'Shroomish',
      'Simisage',
      'Skiddo',
      'Snivy',
      'Steenee',
      'Sunflora',
      'Sunkern',
      'Tangela',
      'Tangrowth',
      'Treecko',
      'Tsareena',
      'Turtwig'
    ];
  }

}
