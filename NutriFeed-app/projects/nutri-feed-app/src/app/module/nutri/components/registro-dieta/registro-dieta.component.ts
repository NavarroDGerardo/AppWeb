import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DietaService } from '../../../service/dieta.service';
import { PacienteService } from '../../../service/paciente.service';
import { ToastrService } from 'ngx-toastr';

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
    private pacienteService: PacienteService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.pacienteService.id;
    console.log(this.id);
  }

  showToastExito(){
    this.toastr.success('la dieta', 'Se registró con éxito');
  }

  showToastError(texto1:string, texto2:string){
    this.toastr.error(texto2, texto1);
  }

  registrarDieta() {
    // console.log(this.modeloDieta.value);
    if (this.modeloDieta.value.desayuno == '') {
      this.showToastError(
        'Desayuno incorrecto',
        'el desayuno no puede ser vacío'
      );
    } else if (this.modeloDieta.value.comida == '') {
      this.showToastError('Comida incorrecta', 'la comida no puede ser vacío');
    } else if (this.modeloDieta.value.cena == '') {
      this.showToastError('Cena incorrecta', 'la cena no puede ser vacía');
    } else if (this.modeloDieta.value.colacion_uno == '') {
      this.showToastError(
        'Colación uno incorrecta',
        'la colación uno no puede ser vacía'
      );
    } else if (this.modeloDieta.value.colacion_dos == '') {
      this.showToastError(
        'Colación dos incorrecta',
        'la colación dos no puede ser vacía'
      );
    } else {
      this.dietaS.registrarDieta(this.id, this.modeloDieta.value);
      this.modeloDieta.reset();
      this.showToastExito();
    }
  }
}
