import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DietaService } from '../../../service/dieta.service';

@Component({
  selector: 'app-registro-dieta',
  templateUrl: './registro-dieta.component.html',
  styleUrls: ['./registro-dieta.component.scss'],
})
export class RegistroDietaComponent implements OnInit {
  modeloDieta = this.formBuild.group({
    desayuno: ['', Validators.required],
    comida: ['', Validators.required],
    cena: ['', Validators.required],
    colaciones: this.formBuild.group({
      colacion1: ['', Validators.required],
      colacion2: ['', Validators.required],
      colacion3: ['', Validators.required],
    }),
  });

  constructor(private formBuild: FormBuilder, private dietaS: DietaService) {}

  ngOnInit(): void {}

  registrarDieta() {
    console.log(this.modeloDieta.value);
    this.dietaS.registrarDieta(this.modeloDieta.value);
  }
}
