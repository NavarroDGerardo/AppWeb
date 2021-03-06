import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { NutriRoutingModule } from './nutri-routing.module';
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
import { HeaderComponent } from './components/header/header.component';
import { VerRecetaComponent } from './components/ver-receta/ver-receta.component';
import { RegistroCalUpdateComponent } from './components/registro-cal-update/registro-cal-update.component';
import { RecetasFeedComponent } from './components/recetas-feed/recetas-feed.component';
import { UpdateInfoPacienteComponent } from './components/update-info-paciente/update-info-paciente.component';
import { RecetaUpdateComponent } from './components/receta-update/receta-update.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HorarioComponent,
    NutriologosComponent,
    PacientesComponent,
    RecetasComponent,
    RegistroRecetasComponent,
    RegistroNutriComponent,
    VerPerfilPacienteComponent,
    RegistroDietaComponent,
    RegistroPacienteComponent,
    VerDietaPacienteComponent,
    HeaderComponent,
    VerRecetaComponent,
    RegistroCalUpdateComponent,
    RecetasFeedComponent,
    UpdateInfoPacienteComponent,
    RecetaUpdateComponent
  ],
  imports: [CommonModule, NutriRoutingModule, ReactiveFormsModule, NgxPaginationModule, TranslateModule],
})
export class NutriModule {}
