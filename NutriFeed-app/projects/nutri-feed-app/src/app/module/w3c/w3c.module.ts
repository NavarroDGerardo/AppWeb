import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W3CRoutingModule } from './w3c-routing.module';
import { VistaComponent } from './components/vista/vista.component';


@NgModule({
  declarations: [VistaComponent],
  imports: [
    CommonModule,
    W3CRoutingModule
  ]
})
export class W3CModule { }
