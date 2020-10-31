import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexBodyComponent } from './Components/index-body/index-body.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { NutriModule } from './module/nutri/nutri.module';
import { PacienteModule } from './module/paciente/paciente.module';
// import { RegistroComponent } from './module/registro/components/registro/registro.component';
import { HeaderPacienteComponent } from './Components/header-paciente/header-paciente.component';
import { LandingModule } from './module/landing/landing.module';
import { HeaderNutriComponent } from './Components/header-nutri/header-nutri.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    IndexBodyComponent,
    HeaderComponent,
    FooterComponent,
    //RegistroComponent,
    HeaderPacienteComponent,
    HeaderNutriComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NutriModule,
    PacienteModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
