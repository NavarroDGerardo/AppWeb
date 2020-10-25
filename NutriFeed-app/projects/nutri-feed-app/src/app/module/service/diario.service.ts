import { Injectable } from '@angular/core';
import { DIARIO } from '../../models/Diario'

@Injectable({
  providedIn: 'root'
})
export class DiarioService {

  constructor(){}

  registrarDiario(diario: { desayuno: string; comida: string; cena: string; imgDesayuno: string; imgComida: string; imgCena: string; }){
    console.log("Registro exitoso", diario)
    DIARIO.push(diario)
  }

}
