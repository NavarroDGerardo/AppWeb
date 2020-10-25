import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms'
import { PROGRESO } from '../../../../models/Progreso';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgresoComponent implements OnInit {

  progreso = PROGRESO;

  modeloProgreso = this.formBuild.group (
    {
      imc: ['', Validators.required],
      kg: ['', Validators.required],
      fecha: new Date()
    }
  );

  constructor(private formBuild:FormBuilder) { }

  ngOnInit(): void {
  }

  registrarProgreso(){
    console.log(this.modeloProgreso.value)
  }

}
