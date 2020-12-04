import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PacienteService } from '../../../service/paciente.service';
import { PACIENTE } from '../../../../models/Paciente';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent implements OnInit {
  //pacientes = PACIENTE;
  selection = '';
  modeloBuscar = this.formbuild.group({
    buscar: ['', Validators.required],
  });
  pacientes:any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formbuild: FormBuilder,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.getAllPacientes();
  }

  ngDestoy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  eliminar(id: string){
    this.pacienteService.eliminarPaciente(id);
    this.getAllPacientes();
    this.getAllPacientes();
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

  buscar(){
    console.log('nombre', this.modeloBuscar.value);
    console.log('selection', this.selection);
    if (this.selection == 'nombre') {
      // console.log('por nombre');
      this.pacienteService
        .getPacienteNombre(this.modeloBuscar.value.buscar)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any[]) => {
          // console.log('la data', data);
          this.pacientes = data;
        });
    } else if (this.selection == 'apellido') {
      // console.log('por apellido');
      this.pacienteService
        .getPacienteApellido(this.modeloBuscar.value.buscar)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any[]) => {
          // console.log('la data', data);
          this.pacientes = data;
        });
    } else {
      // console.log('blanco');
      this.getAllPacientes();
    }
  }

  selectChange(event: any){
    this.selection = event.target.value;
  }

  verPaciente(id: string){
    console.log('el id', id);
    this.pacienteService.id = id;
  }
}
