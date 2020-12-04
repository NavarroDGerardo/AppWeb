import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormArray, Validators } from '@angular/forms';
import { PacienteService } from '../../../service/paciente.service';
import { Paciente } from '../../../../models/Paciente';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.scss'],
})
export class RegistroPacienteComponent implements OnInit {
  selectedFile!: File;

  nombre = "";
  correo = "";
  estado = "";
  edad = "";
  ciudad = "";
  altura = "";
  peso_actual = "";

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

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
  }

  registarPacienteNuevo() {
    const fd = new FormData();
    fd.append('file', this.selectedFile);
    fd.append('nombre', this.modeloPaciente.value.nombre);
    fd.append('correo', this.modeloPaciente.value.correo);
    fd.append('estado', this.modeloPaciente.value.estado);
    fd.append('edad', this.modeloPaciente.value.edad);
    fd.append('ciudad', this.modeloPaciente.value.ciudad);
    fd.append('altura', this.modeloPaciente.value.altura);
    fd.append('peso_actual', this.modeloPaciente.value.nombre);
    this.pacienteService.insertarPaciente(fd);
    this.modeloPaciente.reset();
  }
}
