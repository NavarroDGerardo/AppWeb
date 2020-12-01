import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
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
  pacientes: Horario = {
    _id:'',
    nombre: '',
    apellido: '',
    correoUsuario: '',
    hora: '',
    fecha: ''
  };

  destroy$: Subject<boolean> = new Subject<boolean>();

  modeloNutriologaHorario = this.formbuild.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correoUsuario: ['', Validators.required],
    hora: ['', Validators.required],
    fecha: ['', Validators.required],
  });

  constructor(
    private formbuild: FormBuilder,
    private nutriService: NutriologoService
  ) {}

  ngOnInit(): void {
    console.log('valor', this.nutriService.id);
    this.nutriService
      .getHorarioPaciente(this.nutriService.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.pacientes = data;
      });
  }

  actualizarPacienteHorario() {
    console.log(this.modeloNutriologaHorario.value, this.nutriService.id);
    this.nutriService.editarPacienteHorario(
      this.modeloNutriologaHorario.value,
      this.nutriService.id
    );
    this.modeloNutriologaHorario.reset();
  }
}
