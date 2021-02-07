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
  pokemonsList: any[] = [];
  pokemonData: any;
  pokemons = [];
  pokemonSelected = null;
  species = [
    { value: 'all', name: 'Todos' },
    { value: 'normal', name: 'Normal' },
    { value: 'fighting', name: 'Lucha' },
    { value: 'flying', name: 'Volador' },
    { value: 'poison', name: 'Veneno' },
    { value: 'ground', name: 'Tierra' },
    { value: 'rock', name: 'Roca' },
    { value: 'bug', name: 'Bicho' },
    { value: 'ghost', name: 'Fantasma' },
    { value: 'steel', name: 'Acero' },
    { value: 'fire', name: 'Fuego' },
    { value: 'water', name: 'Agua' },
    { value: 'grass', name: 'Planta' },
    { value: 'electric', name: 'Electrico' },
    { value: 'psychic', name: 'Psiquico' },
    { value: 'ice', name: 'Hielo' },
    { value: 'dragon', name: 'Dragon' },
    { value: 'dark', name: 'Siniestro' },
    { value: 'fairy', name: 'Hada' },
  ];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  seleccionarPokemon(pokemon: any) {
    this.pokemonSelected = pokemon;
  }

  getPokemons() {
    this.pokemonsList = [];
    let pokemonData;
    for (let i = 1; i <= 898; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        (res) => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            height: res.height,
            weight: res.weight,
            types: res.types,
          };
          this.pokemonsList[i - 1] = pokemonData;
        },
        (err) => {
          console.log(err);
        }
      );
    }
    this.data = this.pokemonsList;
  }

  public getPokemonsFilteredByType(filteredType: string) {
    if (filteredType == 'all') return this.clearFilter();
    let filteredPokemons = [];
    filteredPokemons = this.pokemonsList.filter((currPokemon) => {
      console.log('currPokemon', currPokemon)
      return currPokemon.types.some((type) => type.type.name == filteredType)
    });
    this.data = filteredPokemons;
  }
  private clearFilter() {
    this.data = this.pokemonsList;
  }
}
