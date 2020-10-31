import { Component, OnInit } from '@angular/core';
import { DIETA } from '../../../../models/Dieta';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.scss'],
})
export class DietaComponent implements OnInit {
  dieta = DIETA;

  constructor() {}

  ngOnInit(): void {}
}
