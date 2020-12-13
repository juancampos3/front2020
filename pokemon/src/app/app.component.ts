import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  data: any[] = [];

  pokemons = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;

    for (let i = 1; i <= 3; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };
          console.log(pokemonData);
          console.log(res);
          this.data.push(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
