import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RickyMortyImg} from '../servicios/info-ry-m.service';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  @Input()characters:Array<object>;
  
  
  constructor(private httpClient: HttpClient,private rym:RickyMortyImg) { }

  ngOnInit(): void {
    
      

      
    
  }

}
