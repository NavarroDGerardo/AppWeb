import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NutriologoService {
  private nutriologoAgregado = new Subject<object>();

  nutriologoInsertado$ = this.nutriologoAgregado.asObservable();

  agregarnutriologo(nutriologo: object) {
    this.nutriologoAgregado.next(nutriologo);
    console.log(nutriologo);
  }
  constructor() {}
}
