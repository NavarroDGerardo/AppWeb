import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animacionesAplicacion } from './Animaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animacionesAplicacion]
})
export class AppComponent {
  title = 'nutriFeed-app';
  isLanding= false;
  isNutri = true;
  isPaciente = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
