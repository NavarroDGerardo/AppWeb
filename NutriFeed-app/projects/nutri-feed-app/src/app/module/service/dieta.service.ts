import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietaService {

  private dietaRegistrada = new Subject<string>();

  dietaRegistradaAnunciada$ = this.dietaRegistrada.asObservable();

}
