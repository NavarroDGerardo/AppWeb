import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animacionesAplicacion } from './Animaciones';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animacionesAplicacion],
})
export class AppComponent {
  title = 'nutriFeed-app';
  isLanding= false;
<<<<<<< HEAD
  isNutri = true;
  isPaciente = false;
=======
  isNutri = false;
  isPaciente = true;
>>>>>>> 017d7af5215e224cff3fbd3add99c88414bfc063

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  constructor(public auth: AuthService) { }
}
