import { Component, OnInit } from '@angular/core';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';

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

  constructor() { }

  ngOnInit(): void {
  }

  estilo = true;
  
  toggle() {
    this.estilo = !this.estilo;
  }
}
