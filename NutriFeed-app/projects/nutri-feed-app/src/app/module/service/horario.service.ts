import { Injectable } from '@angular/core';
import { HORARIO } from '../../models/Horario'

@Injectable({
  providedIn: 'root'
})
export class HorarioService {


  constructor() { }

  registrarHorario(horario: any){
    console.log("Registro exitoso", horario)
    HORARIO.push(horario)
  }
}
