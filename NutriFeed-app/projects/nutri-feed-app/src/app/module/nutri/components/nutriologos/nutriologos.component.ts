import { Component, OnInit } from '@angular/core';
import { NUTRIOLOGO } from '../../../../models/Nutriologo';

@Component({
  selector: 'app-nutriologos',
  templateUrl: './nutriologos.component.html',
  styleUrls: ['./nutriologos.component.scss']
})
export class NutriologosComponent implements OnInit {
  
  nutriologos = NUTRIOLOGO;
  constructor() { }

  ngOnInit(): void {
  }

}
