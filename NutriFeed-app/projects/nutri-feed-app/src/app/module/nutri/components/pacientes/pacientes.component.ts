import { Component, OnInit } from '@angular/core';
import { PACIENTE } from '../../../../models/Paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  pacientes = PACIENTE;
  constructor() { }

  ngOnInit(): void {
  }

}
