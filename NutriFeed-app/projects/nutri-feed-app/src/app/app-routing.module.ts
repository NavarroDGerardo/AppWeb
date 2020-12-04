import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexBodyComponent } from './Components/index-body/index-body.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', component: IndexBodyComponent },
  // {path:'acerca', loadChildren:'./module/acerca/acerca.module#AcercaModule'},
  // {path: 'comunidad', loadChildren:'./module/comunidad/comunidad.module#ComunidadModule'},
  // {path: 'beneficios', loadChildren:'./module/beneficios/beneficios.module#BeneficiosModule'},
  // {path: 'iniciarSesion', loadChildren:'./module/iniciar-sesion/iniciar-sesion.module#IniciarSesionModule'},
  {
    path: 'nutri',
    loadChildren: './module/nutri/nutri.module#NutriModule',
    data: { animation: 'nutri' }, canActivate:[AuthGuard]
  },

  // {path: 'w3c', loadChildren: './module/w3c-verificacion/w3c-verificacion-routing.module#W3cVerificacionRoutingModule'},
  {
    path: 'paciente',
    loadChildren: './module/paciente/paciente.module#PacienteModule',
    data: { animation: 'Paciente' },canActivate:[AuthGuard]
  },
  {
    path: '',
    loadChildren: './module/landing/landing.module#LandingModule',
    data: { animation: 'LandingPage' } 
  },
  // {path: 'registro', loadChildren:'./module/registro/registro-routing.module#RegistroRoutingModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
