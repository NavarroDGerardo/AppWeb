import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiosRoutingModule } from './beneficios-routing.module';
import { VistaComponent } from './components/vista/vista.component';


@NgModule({
  declarations: [VistaComponent],
  imports: [
    CommonModule,
    BeneficiosRoutingModule
  ]
})
export class BeneficiosModule { }
