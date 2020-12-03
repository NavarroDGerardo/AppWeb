import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PacienteService } from '../../../service/paciente.service';
import { PACIENTE } from '../../../../models/Paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent implements OnInit {
  //pacientes = PACIENTE;
  pacientes:any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.getAllPacientes();
  }

  ngDestoy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  eliminar(id: string){
    this.pacienteService.eliminarPaciente(id);
    this.pacienteService
      .getAllPaciente()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.pacientes = data;
      });
  }

  editar(id: string){
    this.pacienteService.id = id;
  }

  getAllPacientes(){
    this.pacienteService
      .getAllPaciente()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.pacientes = data;
      });
  }
}
