import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { PacienteRoutingModule } from './paciente-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { RecetaComponent } from './components/receta/receta.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    InicioComponent,
    DietaComponent,
    ProgresoComponent,
    RecetaComponent,
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxPaginationModule
  ],
})
export class PacienteModule {}
