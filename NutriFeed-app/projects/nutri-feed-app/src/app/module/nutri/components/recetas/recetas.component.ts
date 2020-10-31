import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RECETA } from '../../../../models/Receta';
import { RecetaService } from '../../../service/receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {
  recetas = RECETA;
  recetasNuevas: object[] = [];
  constructor(private recetaService: RecetaService) {
    recetaService.recetaInscritaAnunciada$.subscribe((c) => {
      console.log(`se agrego ${c}`);
    });
  }

  ngOnInit(): void {}
}
