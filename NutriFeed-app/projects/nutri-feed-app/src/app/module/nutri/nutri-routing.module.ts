import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioComponent } from './components/horario/horario.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NutriologosComponent } from './components/nutriologos/nutriologos.component';
import { RegistroRecetasComponent } from './components/registro-recetas/registro-recetas.component';
import { RegistroNutriComponent } from './components/registro-nutri/registro-nutri.component';
import { VerPerfilPacienteComponent } from './components/ver-perfil-paciente/ver-perfil-paciente.component';
import { RegistroDietaComponent } from './components/registro-dieta/registro-dieta.component';
import { RegistroPacienteComponent } from './components/registro-paciente/registro-paciente.component';
import { VerDietaPacienteComponent } from './components/ver-dieta-paciente/ver-dieta-paciente.component';



const routes: Routes = [
  {path: '', component:HorarioComponent},
  {path: "paciente", component:PacientesComponent},
  {path: "recetas", component:RecetasComponent},
  {path: "nutriologos", component:NutriologosComponent},
  {path: "registro-recetas", component:RegistroRecetasComponent},
  {path: "registro-nutri", component:RegistroNutriComponent},
  {path: "ver-perfil-paciente", component:VerPerfilPacienteComponent},
  {path: "registro-dieta", component:RegistroDietaComponent},
  {path: "registro-paciente", component:RegistroPacienteComponent},
  {path: "ver-dieta-paciente", component:VerDietaPacienteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutriRoutingModule { }
