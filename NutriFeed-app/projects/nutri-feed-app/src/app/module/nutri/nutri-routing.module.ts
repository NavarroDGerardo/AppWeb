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
import { VerRecetaComponent } from './components/ver-receta/ver-receta.component';
import { RecetasFeedComponent } from './components/recetas-feed/recetas-feed.component';
import { RegistroCalUpdateComponent } from './components/registro-cal-update/registro-cal-update.component';
import { UpdateInfoPacienteComponent } from './components/update-info-paciente/update-info-paciente.component';
import { RecetaUpdateComponent } from './components/receta-update/receta-update.component';

const routes: Routes = [
  {
    path: 'horario',
    component: HorarioComponent,
    data: { animation: 'horario' },
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
    data: { animation: 'pacientes' },
  },
  {
    path: 'recetas',
    component: RecetasComponent,
    data: { animation: 'recetas' },
  },
  {
    path: 'nutriologos',
    component: NutriologosComponent,
    data: { animation: 'nutriologos' },
  },
  {
    path: 'registro-recetas',
    component: RegistroRecetasComponent,
    data: { animation: 'registro-recetas' },
  },
  {
    path: 'registro-nutri',
    component: RegistroNutriComponent,
    data: { animation: 'registro-nutri' },
  },
  {
    path: 'ver-perfil-paciente',
    component: VerPerfilPacienteComponent,
    data: { animation: 'ver-perfil-paciente' },
  },
  {
    path: 'registro-dieta',
    component: RegistroDietaComponent,
    data: { animation: 'registro-dieta' },
  },
  {
    path: 'registro-paciente',
    component: RegistroPacienteComponent,
    data: { animation: 'registro-paciente' },
  },
  {
    path: 'ver-dieta-paciente',
    component: VerDietaPacienteComponent,
    data: { animation: 'ver-dieta-paciente' },
  },
  {
    path: 'ver-receta',
    component: VerRecetaComponent,
    data: { animation: 'ver-receta' },
  },
  {
    path: 'registro-cal-update',
    component: RegistroCalUpdateComponent,
    data: { animation: 'registro-cal-update' },
  },
  {
    path: 'recetas-feed',
    component: RecetasFeedComponent,
    data: { animation: 'recetas-feed' },
  },
  {
    path: 'update-info-paciente',
    component: UpdateInfoPacienteComponent,
    data: { animation: 'recetas-feed'}
  },
  {
    path: 'receta-update',
    component: RecetaUpdateComponent,
    data: { animation: 'receta-update'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutriRoutingModule {}
