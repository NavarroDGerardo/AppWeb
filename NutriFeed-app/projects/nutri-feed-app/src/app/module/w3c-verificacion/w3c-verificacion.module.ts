import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W3cVerificacionRoutingModule } from './w3c-verificacion-routing.module';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    W3cVerificacionRoutingModule
  ]
})
export class W3cVerificacionModule { }
