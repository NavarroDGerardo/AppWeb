import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioComponent } from './components/horario/horario.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NutriologosComponent } from './components/nutriologos/nutriologos.component';
import { RegistroRecetasComponent } from './components/registro-recetas/registro-recetas.component';
import { RegistroNutriComponent } from './components/registro-nutri/registro-nutri.component';

const routes: Routes = [
  {path: '', component:HorarioComponent},
  {path: "paciente", component:PacientesComponent},
  {path: "recetas", component:RecetasComponent},
  {path: "nutriologos", component:NutriologosComponent},
  {path: "registro-recetas", component:RegistroRecetasComponent},
  {path: "registro-nutri", component:RegistroNutriComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutriRoutingModule { }
