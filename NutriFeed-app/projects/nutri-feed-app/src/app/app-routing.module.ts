import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexBodyComponent } from './Components/index-body/index-body.component';

const routes: Routes = [
  {path:'', component:IndexBodyComponent},
  {path:'acerca', loadChildren:'./module/acerca/acerca.module#AcercaModule'},
  {path: 'comunidad', loadChildren:'./module/comunidad/comunidad.module#ComunidadModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
