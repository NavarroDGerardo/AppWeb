import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { NUTRIOLOGO } from '../../../../models/Nutriologo';

@Component({
  selector: 'app-registro-nutri',
  templateUrl: './registro-nutri.component.html',
  styleUrls: ['./registro-nutri.component.scss']
})
export class RegistroNutriComponent implements OnInit {
  nutriologos = NUTRIOLOGO;
  modeloNutriologa = this.formbuild.group(
    {
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      email: ["", Validators.required],
      ciudad: ["", Validators.required],
      salario: ["", Validators.required]
    }
  );
  constructor(private formbuild:FormBuilder) { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.modeloNutriologa.value)
  }

}
