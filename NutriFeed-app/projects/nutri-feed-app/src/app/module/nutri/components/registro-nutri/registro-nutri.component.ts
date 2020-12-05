import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { NutriologoService } from '../../../service/nutriologo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro-nutri',
  templateUrl: './registro-nutri.component.html',
  styleUrls: ['./registro-nutri.component.scss'],
})
export class RegistroNutriComponent implements OnInit {
  modeloNutriologaHorario = this.formbuild.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correoUsuario: ['', Validators.required],
    hora: ['', Validators.required],
    fecha: ['', Validators.required],
  });
  constructor(
    private formbuild: FormBuilder,
    private nutriService: NutriologoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void { }

  showToastExito(){
    this.toastr.success('el paciente', 'Se registró con éxito');
  }

  showToastError(texto1:string, texto2:string){
    this.toastr.error(texto2, texto1);
  }

  registrarPacienteHorario() {
    console.log(this.modeloNutriologaHorario.value);
    if (this.modeloNutriologaHorario.value.nombre == '') {
      this.showToastError('Nombre incorrecto', 'el nombre no puede ser vacío');
    } else if (this.modeloNutriologaHorario.value.apellido == '') {
      this.showToastError(
        'Apellido incorrecto',
        'el apellido no puede ser vacío'
      );
    } else if (
      this.modeloNutriologaHorario.value.correoUsuario == '' ||
      !this.modeloNutriologaHorario.value.correoUsuario.includes('@')
    ) {
      this.showToastError(
        'Correo incorrecto',
        'revisa que sea un correo válido'
      );
    } else if (
      this.modeloNutriologaHorario.value.hora == '' ||
      !this.modeloNutriologaHorario.value.hora.includes(':')
    ) {
      this.showToastError(
        'Hora incorrecta',
        'revisa que esté en formato HH:MM'
      );
    } else if (
      this.modeloNutriologaHorario.value.fecha == '' ||
      !this.modeloNutriologaHorario.value.fecha.includes('/')
    ) {
      this.showToastError(
        'Fecha incorrecta',
        'revisa que esté en formato DD/MM/AA'
      );
    } else {
      this.nutriService.insertarPacienteHorario(
        this.modeloNutriologaHorario.value
      );
      this.modeloNutriologaHorario.reset();
      this.showToastExito();
    }
  }
}
