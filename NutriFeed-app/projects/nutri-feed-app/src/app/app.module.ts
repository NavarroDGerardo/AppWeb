import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexBodyComponent } from './Components/index-body/index-body.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { NutriModule } from './module/nutri/nutri.module';
import { PacienteModule } from './module/paciente/paciente.module';
// import { RegistroComponent } from './module/registro/components/registro/registro.component';
import { HeaderPacienteComponent } from './Components/header-paciente/header-paciente.component';
import { LandingModule } from './module/landing/landing.module';
import { HeaderNutriComponent } from './Components/header-nutri/header-nutri.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment as env } from '../environments/environment';
import { ProfileComponent } from './Components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexBodyComponent,
    HeaderComponent,
    FooterComponent,
    //RegistroComponent,
    HeaderPacienteComponent,
    HeaderNutriComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NutriModule,
    PacienteModule,
    LandingModule,
    HttpClientModule,
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'dev-3hczp56w.us.auth0.com',
      clientId: '5cjNos2ouzDTv2Nx8FAH2fa54hjoR2JF',
    
      // Request this audience at user authentication time
      audience: 'https://dev-3hczp56w.us.auth0.com/api/v2/',
    
      // Request this scope at user authentication time
      scope: 'read:current_user',
    
      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-qz51ohsc.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://dev-3hczp56w.us.auth0.com/api/v2/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://dev-3hczp56w.us.auth0.com/api/v2/',
    
              // The attached token should have these scopes
              scope: 'read:current_user'
            },
           
          },
          {uri: `http://localhost:3000/api/*`
        }
        ]
      }
    }),
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,}],
  bootstrap: [AppComponent],
})
export class AppModule {}
