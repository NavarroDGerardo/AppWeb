import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormArray, Validators } from '@angular/forms';
import { PACIENTE } from '../../../../models/Paciente';
import { PacienteService } from '../../../service/paciente.service';


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

  constructor(private formbuild:FormBuilder, private pacienteService:PacienteService) { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.modeloPaciente.value);
    this.pacienteService.agregarPaciente(this.modeloPaciente.value)ñ
    this.modeloPaciente.reset();
  }

}
