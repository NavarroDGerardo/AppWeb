import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private recetaInscrita = new Subject<string>();

  recetaInscritaAnunciada$ = this.recetaInscrita.asObservable();
}
