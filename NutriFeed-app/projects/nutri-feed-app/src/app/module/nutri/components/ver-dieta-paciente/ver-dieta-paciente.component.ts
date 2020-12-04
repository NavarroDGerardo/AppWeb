import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Paciente } from '../../../../models/Paciente';
import { Dieta } from '../../../../models/Dieta';
import { PacienteService } from '../../../service/paciente.service';

@Component({
  selector: 'app-ver-dieta-paciente',
  templateUrl: './ver-dieta-paciente.component.html',
  styleUrls: ['./ver-dieta-paciente.component.scss'],
})
export class VerDietaPacienteComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  paciente: Paciente[] = [];
  dieta: Dieta = {
    desayuno: '',
    comida: '',
    cena: '',
    colacion_uno: '',
    colacion_dos: '',
  };

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.getPaciente();
  }

  getPaciente(){
    this.pacienteService
      .getPaciente(this.pacienteService.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        // console.log('la data', data);
        let len = data['dieta'].length;
        this.paciente = data;
        // console.log('cuenta', len);
        this.dieta = data['dieta'][len - 1];
        // console.log('la dieta', this.dieta);
      });
  }
}
