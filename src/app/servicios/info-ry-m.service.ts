import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RickyMortyImg {
  private apiUrl="https://rickandmortyapi.com/api/character/";
  constructor(private httpClient: HttpClient) { 
    }
    conseguirResultados(){
      return this.httpClient.get(this.apiUrl);
    }
  }

