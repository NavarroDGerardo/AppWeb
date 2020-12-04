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
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'horario',
    component: HorarioComponent,
    data: { animation: 'horario' }, canActivate:[AuthGuard]
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
    data: { animation: 'pacientes' }, canActivate:[AuthGuard]
  },
  {
    path: 'recetas',
    component: RecetasComponent,
    data: { animation: 'recetas' },canActivate:[AuthGuard]
  },
  {
    path: 'nutriologos',
    component: NutriologosComponent,
    data: { animation: 'nutriologos' },canActivate:[AuthGuard]
  },
  {
    path: 'registro-recetas',
    component: RegistroRecetasComponent,
    data: { animation: 'registro-recetas' },canActivate:[AuthGuard]
  },
  {
    path: 'registro-nutri',
    component: RegistroNutriComponent,
    data: { animation: 'registro-nutri' }, canActivate:[AuthGuard]
  },
  {
    path: 'ver-perfil-paciente',
    component: VerPerfilPacienteComponent,
    data: { animation: 'ver-perfil-paciente' },canActivate:[AuthGuard]
  },
  {
    path: 'registro-dieta',
    component: RegistroDietaComponent,
    data: { animation: 'registro-dieta' },canActivate:[AuthGuard]
  },
  {
    path: 'registro-paciente',
    component: RegistroPacienteComponent,
    data: { animation: 'registro-paciente' },canActivate:[AuthGuard]
  },
  {
    path: 'ver-dieta-paciente',
    component: VerDietaPacienteComponent,
    data: { animation: 'ver-dieta-paciente' },canActivate:[AuthGuard]
  },
  {
    path: 'ver-receta',
    component: VerRecetaComponent,
    data: { animation: 'ver-receta' },canActivate:[AuthGuard]
  },
  {
    path: 'registro-cal-update',
    component: RegistroCalUpdateComponent,
    data: { animation: 'registro-cal-update' },canActivate:[AuthGuard]
  },
  {
    path: 'recetas-feed',
    component: RecetasFeedComponent,
    data: { animation: 'recetas-feed' },canActivate:[AuthGuard]
  },
  {
    path: 'update-info-paciente',
    component: UpdateInfoPacienteComponent,
    data: { animation: 'recetas-feed'}, canActivate:[AuthGuard]
  },
  {
    path: 'receta-update',
    component: RecetaUpdateComponent,
    data: { animation: 'receta-update'}, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutriRoutingModule {}
