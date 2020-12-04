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
   
    
      /* user.uid => user id */
      /* user.displayName => user displayName */
    })
   
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  constructor(public auth: AuthService) { }
}
