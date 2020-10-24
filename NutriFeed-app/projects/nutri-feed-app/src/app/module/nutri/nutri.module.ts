import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutriRoutingModule } from './nutri-routing.module';
import { HorarioComponent } from './components/horario/horario.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NutriologosComponent } from './components/nutriologos/nutriologos.component';
import { RegistroRecetasComponent } from './components/registro-recetas/registro-recetas.component';
import { RegistroNutriComponent } from './components/registro-nutri/registro-nutri.component';
import { VerRecetaComponent } from './components/ver-receta/ver-receta.component';
import { RegistroDietaComponent } from './components/registro-dieta/registro-dieta.component';
import { RegistroPacienteComponent } from './components/registro-paciente/registro-paciente.component';


@NgModule({
  declarations: [HorarioComponent, PacientesComponent, RecetasComponent, NutriologosComponent, RegistroRecetasComponent, RegistroNutriComponent, VerRecetaComponent, RegistroDietaComponent, RegistroPacienteComponent],
  imports: [
    CommonModule,
    NutriRoutingModule
  ]
})
export class NutriModule { }
