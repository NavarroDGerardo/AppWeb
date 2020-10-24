import { Component, OnInit } from '@angular/core';
import { RECETA } from '../../../../models/Receta';
@Component({
  selector: 'app-registro-recetas',
  templateUrl: './registro-recetas.component.html',
  styleUrls: ['./registro-recetas.component.scss']
})
export class RegistroRecetasComponent implements OnInit {
  recetas = RECETA;
  constructor() { }

  ngOnInit(): void {
  }

  registrarReceta(){}

}
