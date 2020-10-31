import { Component, OnInit } from '@angular/core';
import { HORARIO } from '../../../../models/Horario';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  pacHorario = HORARIO

  constructor() { }

  ngOnInit(): void {
  }

}
