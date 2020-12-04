import { Component, OnInit } from '@angular/core';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-header-nutri',
  templateUrl: './header-nutri.component.html',
  styleUrls: ['./header-nutri.component.scss'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class HeaderNutriComponent implements OnInit {


  constructor(private auth:AuthService,@Inject(DOCUMENT)private doc: Document) { }

  ngOnInit(): void {
  
  }
  

  estilo = true;

  toggle() {
    this.estilo = !this.estilo;
  }
  logout(): void {
    this.auth.logout({returnTo: this.doc.location.origin})
  }

}
