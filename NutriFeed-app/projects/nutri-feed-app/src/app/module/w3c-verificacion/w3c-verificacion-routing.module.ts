import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsComponent} from "../w3c-verificacion/components/components.component"
const routes: Routes = [{path:'', component:ComponentsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W3cVerificacionRoutingModule { }
