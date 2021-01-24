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
  }
  public getPokemonsCatFour() {
    let pokemonData;
    this.data = [];
    for (let i = 19; i <= 24; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };
          console.log(pokemonData);
          //console.log(res);
          this.data.push(pokemonData);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
    public getPokemonsCatFive() {
      let pokemonData;
      this.data = [];
      for (let i = 25; i <= 30; i++) {
        this.pokemonService.getPokemons(i).subscribe(
          res => {
            pokemonData = {
              position: i,
              image: res.sprites.front_default,
              name: res.name
            };
            console.log(pokemonData);
            //console.log(res);
            this.data.push(pokemonData);
          },
          err => {
            console.log(err);
          }
        );
      }
    }
      public getPokemonsCatSix() {
        let pokemonData;
        this.data = [];
        for (let i = 31; i <= 36; i++) {
          this.pokemonService.getPokemons(i).subscribe(
            res => {
              pokemonData = {
                position: i,
                image: res.sprites.front_default,
                name: res.name
              };
              console.log(pokemonData);
              //console.log(res);
              this.data.push(pokemonData);
            },
            err => {
              console.log(err);
            }
          );
        }
      }
      ​​​​​​​​public getPokemonsCatSeven() {
        let pokemonData;
        this.data = [];
        for (let i = 37; i <= 42; i++) {
          this.pokemonService.getPokemons(i).subscribe(
            res => {
              pokemonData = {
                position: i,
                image: res.sprites.front_default,
                name: res.name
              };
              console.log(pokemonData);
              //console.log(res);
              this.data.push(pokemonData);
            },
            err => {
              console.log(err);
            }
          );
        }
      }
      public getPokemonsCatEight() {
        let pokemonData;
        this.data = [];
        for (let i = 43; i <= 48; i++) {
          this.pokemonService.getPokemons(i).subscribe(
            res => {
              pokemonData = {
                position: i,
                image: res.sprites.front_default,
                name: res.name
              };
              console.log(pokemonData);
              this.data.push(pokemonData);
            },
            err => {
              console.log(err);
            }
          );
        }
        }
        public getPokemonsCatNine() {
          let pokemonData;
          this.data = [];
          for (let i = 49; i <= 54; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
        public getPokemonsCatTen() {
          let pokemonData;
          this.data = [];
          for (let i = 55; i <= 60; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                //console.log(res);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
        public getPokemonsCatEleven() {
          let pokemonData;
          this.data = [];
          for (let i = 61; i <= 66; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                //console.log(res);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
        public getPokemonsCatTwelve() {
          let pokemonData;
          this.data = [];
          for (let i = 67; i <= 72; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                //console.log(res);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
        public getPokemonsCatThirteen() {
          let pokemonData;
          this.data = [];
          for (let i = 73; i <= 78; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                //console.log(res);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
        public getPokemonsCatFourteen() {
          let pokemonData;
          this.data = [];
          for (let i = 79; i <= 84; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                //console.log(res);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
        public getPokemonsCatFifteen() {
          let pokemonData;
          this.data = [];
          for (let i = 85; i <= 90; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                //console.log(res);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
        public getPokemonsCatSixteen() {
          let pokemonData;
          this.data = [];
          for (let i = 91; i <= 96; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                //console.log(res);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
        public getPokemonsCatSeventeen() {
          let pokemonData;
          this.data = [];
          for (let i = 97; i <= 102; i++) {
            this.pokemonService.getPokemons(i).subscribe(
              res => {
                pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name
                };
                console.log(pokemonData);
                //console.log(res);
                this.data.push(pokemonData);
              },
              err => {
                console.log(err);
              }
            );
          }
        }
}
