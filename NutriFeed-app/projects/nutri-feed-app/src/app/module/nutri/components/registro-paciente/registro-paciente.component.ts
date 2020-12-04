import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormArray, Validators } from '@angular/forms';
import { PacienteService } from '../../../service/paciente.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.scss'],
})
export class RegistroPacienteComponent implements OnInit {
  modeloPaciente = this.formbuild.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    estado: ['', Validators.required],
    edad: ['', Validators.required],
    ciudad: ['', Validators.required],
    altura: ['', Validators.required],
    peso: ['', Validators.required],
    correo: ['', Validators.required]
  });

  constructor(
    private formbuild: FormBuilder,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {}

  registarPacienteNuevo() {
    console.log(this.modeloPaciente.value);
    this.pacienteService.insertarPaciente(
      this.modeloPaciente.value
    );
    this.modeloPaciente.reset();
  }
}
