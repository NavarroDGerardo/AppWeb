import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { AcercaComponent } from './components/acerca/acerca.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { W3cComponent } from './components/w3c/w3c.component';
import { IniSesionComponent } from './components/iniciarSesion/ini-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/components/inicio/inicio.component';
import { FooterComponent } from './components/inicio/components/footer/footer.component';
import { HeaderComponent } from './components/inicio/components/header/header.component';

@NgModule({
  declarations: [AcercaComponent, BeneficiosComponent, ComunidadComponent, W3cComponent, IniSesionComponent, RegistroComponent, InicioComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
