import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DietaService } from '../../../service/dieta.service';
import { PacienteService } from '../../../service/paciente.service';

@Component({
  selector: 'app-registro-dieta',
  templateUrl: './registro-dieta.component.html',
  styleUrls: ['./registro-dieta.component.scss'],
})
export class RegistroDietaComponent implements OnInit {
  id = '';

  modeloDieta = this.formBuild.group({
    desayuno: ['', Validators.required],
    comida: ['', Validators.required],
    cena: ['', Validators.required],
    colacion_uno: ['', Validators.required],
    colacion_dos: ['', Validators.required],
  });

  constructor(
    private formBuild: FormBuilder,
    private dietaS: DietaService,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.id = this.pacienteService.id;
    console.log(this.id);
  }

  registrarDieta() {
    console.log(this.modeloDieta.value);
    this.dietaS.registrarDieta(this.id, this.modeloDieta.value);
    this.modeloDieta.reset();
  }
}
