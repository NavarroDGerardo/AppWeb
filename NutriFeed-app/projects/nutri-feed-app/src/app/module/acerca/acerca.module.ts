import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercaRoutingModule } from './acerca-routing.module';
import { VistaComponent } from './components/vista/vista.component';


@NgModule({
  declarations: [VistaComponent],
  imports: [
    CommonModule,
    AcercaRoutingModule
  ]
})
export class AcercaModule { }
