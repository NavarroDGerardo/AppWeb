import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import Paciente from 'backend/models/paciente';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Horario } from '../../../../models/Horario';
import { NutriologoService } from '../../../service/nutriologo.service';

@Component({
  selector: 'app-registro-cal-update',
  templateUrl: './registro-cal-update.component.html',
  styleUrls: ['./registro-cal-update.component.scss'],
})
export class RegistroCalUpdateComponent implements OnInit {
  nombre = '';
  apellido = '';
  correoUsuario = '';
  hora = '';
  fecha = '';

  paciente: Horario = {
    _id: '',
    nombre: '',
    apellido: '',
    correoUsuario: '',
    hora: '',
    fecha: '',
  };

  destroy$: Subject<boolean> = new Subject<boolean>();

  modeloNutriologaHorario = this.formbuild.group({
    nombre: [this.nombre, Validators.required],
    apellido: [this.apellido, Validators.required],
    correoUsuario: [this.correoUsuario, Validators.required],
    hora: [this.hora, Validators.required],
    fecha: [this.fecha, Validators.required],
  });

  constructor(
    private formbuild: FormBuilder,
    private nutriService: NutriologoService
  ) {}

  ngOnInit(): void {
    // console.log('valor', this.nutriService.id);
    this.nutriService
      .getHorarioPaciente(this.nutriService.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.paciente = data;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.correoUsuario = data.correoUsuario;
        this.hora = data.hora;
        this.fecha = data.fecha;
      });
  }

  actualizarPacienteHorario() {
    if (this.modeloNutriologaHorario.value.nombre != "") {
      this.paciente.nombre = this.modeloNutriologaHorario.value.nombre;
    }
    if (this.modeloNutriologaHorario.value.apellido != "") {
      this.paciente.apellido = this.modeloNutriologaHorario.value.apellido;
    }
    if (this.modeloNutriologaHorario.value.correoUsuario != ""){
      this.paciente.correoUsuario = this.modeloNutriologaHorario.value.correoUsuario;
    }
    if (this.modeloNutriologaHorario.value.edad != "") {
      this.paciente.hora = this.modeloNutriologaHorario.value.hora;
    }
    if (this.modeloNutriologaHorario.value.fecha != ""){
      this.paciente.fecha = this.modeloNutriologaHorario.value.fecha;
    }

    // console.log(this.paciente);
    this.nutriService.editarPacienteHorario(
      this.paciente,
      this.nutriService.id
    );
    this.modeloNutriologaHorario.reset();
  }
}
