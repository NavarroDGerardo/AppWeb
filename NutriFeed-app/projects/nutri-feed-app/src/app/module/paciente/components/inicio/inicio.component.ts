import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DiarioService } from '../../../service/diario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  modeloDiario = this.formBuild.group({
    desayuno: ['', Validators.required],
    comida: ['', Validators.required],
    cena: ['', Validators.required],
    imgDesayuno: ['', Validators.required],
    imgComida: ['', Validators.required],
    imgCena: ['', Validators.required],
  });

  constructor(private formBuild: FormBuilder, private diarioS: DiarioService) {}

  ngOnInit(): void {}

  registrarDiario() {
    console.log(this.modeloDiario.value);
    this.diarioS.registrarDiario(this.modeloDiario.value);
  }
}
