import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgresoService {

  private progresoRegistrado = new Subject<string>();

  progresoRegistradoAnunciado$ = this.progresoRegistrado.asObservable();

}
