import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss']
})
export class PaginacionComponent implements OnInit {
  
  @Input()paginaActual:number;
  @Output()cambioPagina=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    


    
  }
  incrementarNumero(){
    if(this.paginaActual===25){
      alert('Se encuentra en la última página de imágenes')
    }
    else{

    this.paginaActual=this.paginaActual+1;
    this.cambioPagina.next(this.paginaActual);
    }}
  disminuirNumero(){
    if(this.paginaActual===1){
      alert('Se encuentra en la primera página de imágenes')
    }
    else{
    this.paginaActual=this.paginaActual-1;
    this.cambioPagina.next(this.paginaActual);
    }
  }

}
