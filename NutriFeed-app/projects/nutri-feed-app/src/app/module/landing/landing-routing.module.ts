import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaComponent } from './components/acerca/acerca.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { W3cComponent } from './components/w3c/w3c.component';
import { IniSesionComponent } from './components/iniciarSesion/ini-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from '../paciente/components/inicio/inicio.component';

const routes: Routes = [
  {path: "", component:InicioComponent, data: {animation: 'Inicio'}},
  {path: "acerca", component:AcercaComponent, data: {animation: 'Acerca'}},
  {path: "beneficios", component:BeneficiosComponent, data: {animation: 'Beneficios'}},
  {path: "comunidad", component:ComunidadComponent, data: {animation: 'Comunidad'}},
  {path: "w3c", component:W3cComponent, data: {animation: 'w3c'}},
  {path: "iniciarSesion", component:IniSesionComponent, data: {animation: 'IniciarSesion'}},
  {path: "registro", component:RegistroComponent, data: {animation: 'Registro'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
