import { Injectable } from '@angular/core';
import { HORARIO } from '../../models/Horario';

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  registrarHorario(horario: {
    nombre: string;
    apellido: string;
    horario: string;
  }) {
    console.log('Registro exitoso', horario);
    HORARIO.push(horario);
  }
}
