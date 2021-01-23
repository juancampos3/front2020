import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeApi';
  data: any[] = [];
  pokemonData: any;
  pokemons = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {​​
    let pokemonData;
    for (let i = 1; i <= 108; i++) {​​

      this.pokemonService.getPokemons(i).subscribe(
        res => {​​
          pokemonData = {​​
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }​​;
          console.log(pokemonData);
          console.log(res);
          this.data.push(pokemonData);
        }​​,
        err => {​​
          console.log(err);
        }​​
      );
    }​​
  }
  public getPokemonsCatOne() {​​

    let pokemonData;
    this.data = [];
    for (let i = 1; i <= 6; i++) {​​
      this.pokemonService.getPokemons(i).subscribe(
        res => {​​
          pokemonData = {​​
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }​​;
          console.log(pokemonData);
          this.data.push(pokemonData);
        }​​,
        err => {​​
          console.log(err);
        }​​
      );
    }​​
  }
  public getPokemonsCatTwo() {​​

    let pokemonData;
    this.data = [];
    for (let i = 7; i <= 12; i++) {​​
      this.pokemonService.getPokemons(i).subscribe(
        res => {​​
          pokemonData = {​​
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }​​;
          console.log(pokemonData);
          this.data.push(pokemonData);
        }​​,
        err => {​​
          console.log(err);
        }​​
      );
    }​​
  }
  public getPokemonsCatThree() {​​

    let pokemonData;
    this.data = [];
    for (let i = 13; i <= 18; i++) {​​
      this.pokemonService.getPokemons(i).subscribe(
        res => {​​
          pokemonData = {​​
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }​​;
          console.log(pokemonData);
          this.data.push(pokemonData);
        }​​,
        err => {​​
          console.log(err);
        }​​
      );
    }​​
  }​​​​​​​​
}
