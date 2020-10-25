import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormArray, Validators } from '@angular/forms';
import { PACIENTE } from '../../../../models/Paciente';


@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.scss']
})

export class RegistroPacienteComponent implements OnInit {
  pacientes = PACIENTE;
  modeloPaciente = this.formbuild.group(
    {
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      Email: ['', Validators.required],
      estado: ['', Validators.required],
      nutriologo: ['', Validators.required]
    }
  )

  constructor(private formbuild:FormBuilder) { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.modeloPaciente.value)
  }

}
