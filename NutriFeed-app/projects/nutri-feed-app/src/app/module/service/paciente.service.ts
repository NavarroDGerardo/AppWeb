import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private pacienteAgregado = new Subject<object>();

  pacienteInsertado$ = this.pacienteAgregado.asObservable();

  agregarPaciente(paciente: object) {
    this.pacienteAgregado.next(paciente);
    console.log(paciente);
  }
  constructor() {}
}
