import { Component, Input, OnInit } from '@angular/core';
import { RECETA } from '../../../../models/Receta';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  recetas = RECETA;
  constructor() { }

  ngOnInit(): void {
  }

}
