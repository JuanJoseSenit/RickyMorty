import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episody-page',
  templateUrl: './episody-page.component.html',
  styleUrls: ['./episody-page.component.scss']
})
export class EpisodyPageComponent implements OnInit {
  episodios;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('https://rickandmortyapi.com/api/episode/').subscribe(
      (res:any)=>{this.episodios=res.results;
         console.log(this.episodios)
      });
  }

}
