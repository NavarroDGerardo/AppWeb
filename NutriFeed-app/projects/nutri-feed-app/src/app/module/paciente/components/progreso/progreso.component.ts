import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgresoComponent implements OnInit {
  modeloProgreso = this.formBuild.group (
    {
      imc: ['', Validators.required],
      kg: ['', Validators.required]
    }
  );

  constructor(private formBuild:FormBuilder) { }

  ngOnInit(): void {
  }

  registrarProgreso(){
    console.log(this.modeloProgreso.value)
  }

}
