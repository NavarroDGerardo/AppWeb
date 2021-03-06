import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Paciente } from '../../../../models/Paciente';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PacienteService } from '../../../service/paciente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-info-paciente',
  templateUrl: './update-info-paciente.component.html',
  styleUrls: ['./update-info-paciente.component.scss']
})
export class UpdateInfoPacienteComponent implements OnInit {
  nombre = "";
  correo = "";
  estado = "";
  edad = "";
  ciudad = "";
  altura = "";
  peso_actual = "";

  paciente: Paciente = {
    _id: '',
    nombre: '',
    apellido: '',
    correo: '',
    estado: '',
    edad: '',
    ciudad: '',
    altura: '',
    peso_actual: '',
  };

  destroy$: Subject<boolean> = new Subject<boolean>();

  modeloPaciente = this.formbuild.group({
    nombre: [this.nombre, Validators.required],
    estado: [this.estado, Validators.required],
    correo: [this.correo, Validators.required],
    edad: [this.edad, Validators.required],
    ciudad: [this.ciudad, Validators.required],
    altura: [this.altura, Validators.required],
    peso: [this.peso_actual, Validators.required]
  });

  constructor( private formbuild: FormBuilder, private pacienteService: PacienteService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.pacienteService
      .getPaciente(this.pacienteService.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.paciente = data;
      });
  }

  showToastExito(){
    this.toastr.success('el paciente', 'Se actualizó con éxito');
  }

  showToastError(texto1:string, texto2:string){
    this.toastr.error(texto2, texto1);
  }

  actualizarDatosPaciente(){
    //console.log(this.modeloPaciente.value, this.pacienteService.id);
    let actualizar = true;
    if(this.modeloPaciente.value.nombre != ""){
      this.paciente.nombre = this.modeloPaciente.value.nombre;
    }
    if(this.modeloPaciente.value.estado != ""){
      this.paciente.estado = this.modeloPaciente.value.estado;
    }
    if(this.modeloPaciente.value.correo != ""){
      if (!this.modeloPaciente.value.correo.includes('@')) {
        this.showToastError(
          'Correo incorrecto',
          'revisa que sea un correo válido'
        );
        actualizar = false;
      } else {
        this.paciente.correo = this.modeloPaciente.value.correo;
      }
    }
    if(this.modeloPaciente.value.edad != ""){
      this.paciente.edad = this.modeloPaciente.value.edad;
    }
    if(this.modeloPaciente.value.ciudad != ""){
      this.paciente.ciudad = this.modeloPaciente.value.ciudad;
    }
    if(this.modeloPaciente.value.altura != ""){
      this.paciente.altura = this.modeloPaciente.value.altura;
    }
    if(this.modeloPaciente.value.peso != ""){
      this.paciente.peso_actual = this.modeloPaciente.value.peso;
    }
    if (actualizar) {
      this.pacienteService.editarPaciente(
        this.paciente,
        this.pacienteService.id
      );
      this.modeloPaciente.reset();
      this.showToastExito();
    }
  }
}
