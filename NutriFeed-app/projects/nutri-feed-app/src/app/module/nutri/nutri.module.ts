import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutriRoutingModule } from './nutri-routing.module';
import { HorarioComponent } from './components/horario/horario.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NutriologosComponent } from './components/nutriologos/nutriologos.component';


@NgModule({
  declarations: [HorarioComponent, PacientesComponent, RecetasComponent, NutriologosComponent],
  imports: [
    CommonModule,
    NutriRoutingModule
  ]
})
export class NutriModule { }
