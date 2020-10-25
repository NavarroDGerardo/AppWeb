import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexBodyComponent } from './Components/index-body/index-body.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { ComunidadModule } from './module/comunidad/comunidad.module';
import { AcercaModule } from './module/acerca/acerca.module';
import { BeneficiosModule } from './module/beneficios/beneficios.module';
import { IniciarSesionModule } from './module/iniciar-sesion/iniciar-sesion.module';
import { RegistroRoutingModule } from './module/registro/registro-routing.module';
import { NutriModule } from './module/nutri/nutri.module';
import { PacienteModule } from './module/paciente/paciente.module';
import { W3cVerificacionModule } from './module/w3c-verificacion/w3c-verificacion.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexBodyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunidadModule,
    AcercaModule,
    BeneficiosModule,
    NutriModule,
    IniciarSesionModule,
    PacienteModule,
    W3cVerificacionModule,
    RegistroRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
