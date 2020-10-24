import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutriRoutingModule } from './nutri-routing.module';
import { HorarioComponent } from './components/horario/horario.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NutriologosComponent } from './components/nutriologos/nutriologos.component';
import { RegistroRecetasComponent } from './components/registro-recetas/registro-recetas.component';
import { RegistroNutriComponent } from './components/registro-nutri/registro-nutri.component';
import { VerPerfilPacienteComponent } from './components/ver-perfil-paciente/ver-perfil-paciente.component';


@NgModule({
  declarations: [HorarioComponent, PacientesComponent, RecetasComponent, NutriologosComponent, RegistroRecetasComponent, RegistroNutriComponent, VerPerfilPacienteComponent],
  imports: [
    CommonModule,
    NutriRoutingModule
  ]
})
export class NutriModule { }
