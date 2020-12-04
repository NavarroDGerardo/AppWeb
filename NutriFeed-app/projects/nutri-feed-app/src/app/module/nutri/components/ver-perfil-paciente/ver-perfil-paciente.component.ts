import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PacienteService } from '../../../service/paciente.service';

@Component({
  selector: 'app-ver-perfil-paciente',
  templateUrl: './ver-perfil-paciente.component.html',
  styleUrls: ['./ver-perfil-paciente.component.scss'],
})
export class VerPerfilPacienteComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  paciente:any;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.getPaciente();
  }

  ngDestoy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getPaciente(){
    this.pacienteService
      .getPaciente(this.pacienteService.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        console.log('la data', data);
        this.paciente = data;
      });
  }

  agregarDieta(){
    console.log(this.pacienteService.id);
  }
}
