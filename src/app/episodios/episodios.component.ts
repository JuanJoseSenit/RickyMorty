import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {
  @Input()episodios;

  constructor() { }

  ngOnInit(): void {
  }

}
