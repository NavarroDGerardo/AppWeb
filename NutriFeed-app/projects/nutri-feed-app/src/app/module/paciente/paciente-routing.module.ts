import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietaComponent } from './components/dieta/dieta.component';
import { InicioComponent } from './components/inicio/inicio.component'
import { ProgresoComponent } from './components/progreso/progreso.component';
import { RecetaComponent } from './components/receta/receta.component';

const routes: Routes = [
  { path: 'dieta', component:DietaComponent},
  { path: 'inicio', component:InicioComponent},
  { path: 'progreso', component:ProgresoComponent},
  { path: 'receta', component:RecetaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
