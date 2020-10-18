import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexBodyComponent } from './Components/index-body/index-body.component';

const routes: Routes = [
  {path:'', component:IndexBodyComponent},
  {path:'acerca', loadChildren:'./module/acerca/acerca.module#AcercaModule'},
  {path: 'comunidad', loadChildren:'./module/comunidad/comunidad.module#ComunidadModule'},
  {path: 'beneficios', loadChildren:'./module/beneficios/beneficios.module#BeneficiosModule'},
  {path: 'w3c', loadChildren:'./module/w3c/w3c.module#W3CModule'},
  {path: 'nutri', loadChildren: './module/nutri/nutri.module#NutriModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
