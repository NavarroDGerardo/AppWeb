import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { PacienteRoutingModule } from './paciente-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { RecetaComponent } from './components/receta/receta.component';


@NgModule({
  declarations: [InicioComponent, DietaComponent, ProgresoComponent, RecetaComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class PacienteModule { }
