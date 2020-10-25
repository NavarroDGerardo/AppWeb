import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private recetaAgregada = new Subject<object>();

  recetaInscritaAnunciada$ = this.recetaAgregada.asObservable();

  agregarReceta(receta: object){
    this.recetaAgregada.next(receta);
    console.log(receta);
  }
}
