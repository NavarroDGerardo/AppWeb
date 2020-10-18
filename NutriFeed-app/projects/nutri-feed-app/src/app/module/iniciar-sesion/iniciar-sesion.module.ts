import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciarSesionRoutingModule } from './iniciar-sesion-routing.module';
import { IniSesionComponent } from './components/ini-sesion/ini-sesion.component';


@NgModule({
  declarations: [IniSesionComponent],
  imports: [
    CommonModule,
    IniciarSesionRoutingModule
  ]
})
export class IniciarSesionModule { }
