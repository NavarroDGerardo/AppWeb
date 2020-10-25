import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiarioService {

  private diarioRegistrado = new Subject<string>();

  diarioRegistradoAnunciado$ = this.diarioRegistrado.asObservable();
}
