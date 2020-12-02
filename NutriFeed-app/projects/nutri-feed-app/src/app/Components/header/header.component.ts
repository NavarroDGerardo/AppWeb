import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 
  ngOnInit(): void {
  }

  constructor(private auth: AuthService) { }

  login(): void{
    this.auth.loginWithRedirect();
    console.log("boton");
  }
 

}
