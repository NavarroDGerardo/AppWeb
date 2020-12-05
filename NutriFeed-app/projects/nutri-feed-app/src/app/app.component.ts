import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animacionesAplicacion } from './Animaciones';
import { AuthService } from '@auth0/auth0-angular';
import { PacienteService } from '../app/module/service/paciente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animacionesAplicacion],
})
export class AppComponent {
  title = 'nutriFeed-app';

  isLanding= false;

  constructor(public auth: AuthService, private pacienteService: PacienteService) { }


  loggedIn = true;
  user: string= "";
   emailT = "";
   substring = "@admin.com";

   isPaciente = false;
   isNutri=false;

  ngOnInit(): void {
    console.log(this.isNutri);
    this.auth.user$.subscribe((user) => {
      this.user = user;
      console.log(user)
      this.emailT = user.email;
     console.log(this.emailT)
     this.isNutri=this.emailT.includes(this.substring);
      this.pacienteService.emailLoggeado = user.email;
    })

  }




  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
