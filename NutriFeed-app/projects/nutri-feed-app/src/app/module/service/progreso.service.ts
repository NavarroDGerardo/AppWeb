import { Injectable } from '@angular/core';
import { PROGRESO } from '../../models/Progreso';

@Injectable({
  providedIn: 'root',
})
export class ProgresoService {
  constructor() {}

  registrarProgreso(progreso: { imc: string; kg: string; fecha: string }) {
    console.log('Registro exitoso', progreso);
    PROGRESO.push(progreso);
  }
}
