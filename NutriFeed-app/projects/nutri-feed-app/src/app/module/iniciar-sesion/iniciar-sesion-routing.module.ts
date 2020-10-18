import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniSesionComponent } from '../iniciar-sesion/components/ini-sesion/ini-sesion.component';

const routes: Routes = [{path:'', component:IniSesionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciarSesionRoutingModule { }
