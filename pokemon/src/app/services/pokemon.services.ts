import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  api: string = environment.backend;

  constructor(private http: HttpClient) { }

  requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }),
    method: 'GET',
    mode: 'no-cors'
  };

  getPokemons(index){
    return this.http.get<any>(`${this.api}/pokemon/${index}`, this.requestOptions);
  }
}
