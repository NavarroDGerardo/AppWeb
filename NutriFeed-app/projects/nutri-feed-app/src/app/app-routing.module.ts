import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexBodyComponent } from './Components/index-body/index-body.component';

const routes: Routes = [
  {path:'', component:IndexBodyComponent},
  {path:'acerca', loadChildren:'./module/acerca/acerca.module#AcercaModule'},
  {path: 'comunidad', loadChildren:'./module/comunidad/comunidad.module#ComunidadModule'},
  {path: 'beneficios', loadChildren:'./module/beneficios/beneficios.module#BeneficiosModule'},
  {path: 'iniciarSesion', loadChildren:'./module/iniciar-sesion/iniciar-sesion.module#IniciarSesionModule'},
<<<<<<< HEAD
  {path: 'nutri', loadChildren: './module/nutri/nutri.module#NutriModule'},
  {path: 'paciente', loadChildren: './module/paciente/paciente.module#PacienteModule'}
=======
  {path: 'registro', loadChildren:'./module/registro/registro-routing.module#RegistroRoutingModule'},
  {path: 'nutri', loadChildren: './module/nutri/nutri.module#NutriModule'}
>>>>>>> 65ac17d0c54558cbecd698254749ca86be4d2ea6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
