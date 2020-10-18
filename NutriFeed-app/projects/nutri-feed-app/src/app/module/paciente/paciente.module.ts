import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { RecetaComponent } from './components/receta/receta.component';
import { VerRecetaComponent } from './components/ver-receta/ver-receta.component';


@NgModule({
  declarations: [InicioComponent, DietaComponent, ProgresoComponent, RecetaComponent, VerRecetaComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
