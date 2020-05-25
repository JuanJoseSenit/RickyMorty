import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RickyMortyImg} from '../servicios/info-ry-m.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  
  paginaActual:number=1;
  characters:Array<object>;
  personajes:Array<object>;

  constructor(private httpClient: HttpClient,private rym:RickyMortyImg) { }

  ngOnInit(): void {
  
    this.httpClient.get('https://rickandmortyapi.com/api/character/?page='+this.paginaActual).subscribe(
      (res:any)=>{this.characters=res.results;
         console.log(this.characters)
      });
    
      //generado por medio del servicio. En el  constructor pasarle la variable de tipo nombre de la clase del servicio a emplear
      //la funcion es la de la clase del servicio.
      this.rym.conseguirResultados().subscribe(
        (data:any)=>{
          this.personajes=data.results;
        }

      );
  }
  modificarPag($e){
    
    this.paginaActual=$e;
    
    this.httpClient.get('https://rickandmortyapi.com/api/character/?page='+this.paginaActual).subscribe(
      (res:any)=>{this.characters=res.results;
         console.log(this.characters)
      });
  

  }

}
