import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { NutriologoService } from '../../../service/nutriologo.service';

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
    private nutriService: NutriologoService
  ) {}

  ngOnInit(): void {}

  registrarPacienteHorario() {
    console.log(this.modeloNutriologaHorario.value);
    this.nutriService.insertarPacienteHorario(
      this.modeloNutriologaHorario.value
    );
    this.modeloNutriologaHorario.reset();
    // this.nutriService.agregarnutriologo(this.modeloNutriologa.value);
    // this.modeloNutriologa.reset();
  }
}
