import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  api: string = environment.backend;

  constructor(private http: HttpClient) { }

//obtiene pokemon
  getPokemons(index){
    return this.http.get<any>(`${this.api}/pokemon/${index}`);
  }


}
