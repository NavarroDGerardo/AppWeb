import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormArray, Validators } from '@angular/forms';
import { PacienteService } from '../../../service/paciente.service';
import { Paciente } from '../../../../models/Paciente';
import { ToastrService } from 'ngx-toastr';

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

  seleccionEstado = '';

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
    private pacienteService: PacienteService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
  }

  showToastExito(){
    this.toastr.success('el paciente', 'Se registró con éxito');
  }

  showToastError(texto1:string, texto2:string){
    this.toastr.error(texto2, texto1);
  }

  registarPacienteNuevo() {
    if (this.modeloPaciente.value.nombre == '') {
      this.showToastError('Nombre incorrecto', 'el nombre no puede ser vacío');
    } else if (this.modeloPaciente.value.apellido == '') {
      this.showToastError(
        'Apellido incorrecto',
        'el apellido no puede ser vacío'
      );
    } else if (this.modeloPaciente.value.estado == '') {
      this.showToastError(
        'Estado incorrecto',
        'se tiene que determinar el estado del paciente'
      );
    } else if (this.modeloPaciente.value.edad == '') {
      this.showToastError('Edad incorrecta', 'la edad no puede ser vacía');
    } else if (this.modeloPaciente.value.ciudad == '') {
      this.showToastError('Ciudad incorrecta', 'la ciudad no puede ser vacía');
    } else if (this.modeloPaciente.value.altura == '') {
      this.showToastError('Altura incorrecta', 'la altura no puede ser vacía');
    } else if (this.modeloPaciente.value.peso == '') {
      this.showToastError('Peso incorrecto', 'el peso no puede ser vacío');
    } else if (
      this.modeloPaciente.value.correo == '' ||
      !this.modeloPaciente.value.correo.includes('@')
    ) {
      this.showToastError(
        'Correo incorrecto',
        'revisa que sea un correo válido'
      );
    } else {
      this.modeloPaciente.value.estado = this.seleccionEstado
      const fd = new FormData();
      fd.append('file', this.selectedFile);
      fd.append('nombre', this.modeloPaciente.value.nombre);
      fd.append('correo', this.modeloPaciente.value.correo);
      fd.append('estado', this.modeloPaciente.value.estado);
      fd.append('edad', this.modeloPaciente.value.edad);
      fd.append('ciudad', this.modeloPaciente.value.ciudad);
      fd.append('altura', this.modeloPaciente.value.altura);
      fd.append('peso_actual', this.modeloPaciente.value.peso);
      this.pacienteService.insertarPaciente(fd);
      this.modeloPaciente.reset();
      this.showToastExito();
    }
  }

  selectChange(event: any){
    this.seleccionEstado = event.target.value;
  }
}
