import { Injectable } from '@angular/core';
import { DIETA } from '../../models/Dieta';

@Injectable({
  providedIn: 'root',
})
export class DietaService {
  constructor() {}

  registrarDieta(dieta: {
    desayuno: string;
    comida: string;
    cena: string;
    colaciones: { colacion1: string; colacion2: string; colacion3: string };
  }) {
    console.log('Registro exitoso', dieta);
    DIETA.push(dieta);
  }
}
