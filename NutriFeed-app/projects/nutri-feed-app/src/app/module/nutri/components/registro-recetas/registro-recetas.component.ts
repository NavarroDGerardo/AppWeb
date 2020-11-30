import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecetaService } from '../../../service/receta.service';

@Component({
  selector: 'app-registro-recetas',
  templateUrl: './registro-recetas.component.html',
  styleUrls: ['./registro-recetas.component.scss'],
})
export class RegistroRecetasComponent implements OnInit {
  //subscribe: Subscription;

  modeloReceta = this.formbuild.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    imagen: ['', Validators.required],
    tipo: ['', Validators.required],
    ingrediente: ['', Validators.required],
    hashtags: ['', Validators.required],
    // fecha: '',
  });

  constructor(
    private formbuild: FormBuilder,
    private recetaService: RecetaService
  ) {}

  ngOnInit(): void {}

  registrarReceta() {
    // const fech = new Date();
    // const mes = fech.getMonth();
    // this.modeloReceta.fecha = mes;
    console.log(this.modeloReceta.value);
    this.recetaService.insertarReceta(this.modeloReceta.value);
    this.modeloReceta.reset();
  }

  enviar(){}

  // enviar() {
  //   console.log(this.modeloReceta.value);
  //   this.recetaService.agregarReceta(this.modeloReceta.value);
  //   this.modeloReceta.reset();
  // }
}
