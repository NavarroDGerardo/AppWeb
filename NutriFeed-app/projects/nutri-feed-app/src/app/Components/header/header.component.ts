import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 
  ngOnInit(): void {
  }

  constructor(private auth: AuthService, private translate: TranslateService) {
  }

  changeToEspanish(){
    console.log("idioma espaniol");
    this.translate.use('es');
  }

  changetoEnglish(){
    console.log("idioma ingles");
    this.translate.use('en');
  }

  login(): void{
    this.auth.loginWithRedirect();
    console.log("boton");
  }
 

}
