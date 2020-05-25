import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RickyMortyImg} from '../servicios/info-ry-m.service';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.scss']
})
export class PantallaPrincipalComponent implements OnInit {
  
  constructor(private httpClient: HttpClient,private rym:RickyMortyImg) { }

  ngOnInit(): void {
    
  }

}
