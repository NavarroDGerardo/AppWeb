import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexBodyComponent } from './Components/index-body/index-body.component';

const routes: Routes = [
  {path:'', component:IndexBodyComponent},
  // {path:'acerca', loadChildren:'./module/acerca/acerca.module#AcercaModule'},
  // {path: 'comunidad', loadChildren:'./module/comunidad/comunidad.module#ComunidadModule'},
  // {path: 'beneficios', loadChildren:'./module/beneficios/beneficios.module#BeneficiosModule'},
  // {path: 'iniciarSesion', loadChildren:'./module/iniciar-sesion/iniciar-sesion.module#IniciarSesionModule'},
  {path: 'nutri', loadChildren: './module/nutri/nutri.module#NutriModule'},
  // {path: 'w3c', loadChildren: './module/w3c-verificacion/w3c-verificacion-routing.module#W3cVerificacionRoutingModule'},
  {path: 'paciente', loadChildren: './module/paciente/paciente.module#PacienteModule'},
  {path: '', loadChildren: './module/landing/landing.module#LandingModule'}
  // {path: 'registro', loadChildren:'./module/registro/registro-routing.module#RegistroRoutingModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
