import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { RecetaService } from '../../../service/receta.service';
import { Receta } from '../../../../models/Receta';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-receta-update',
  templateUrl: './receta-update.component.html',
  styleUrls: ['./receta-update.component.scss']
})
export class RecetaUpdateComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  receta: Receta = {
    _id: '',
    nombre: '',
    publicado_por: '',
    ingrediente: '',
    descripcion: '',
    imagen: '',
    tipo: '',
    hashtags: '',
    fecha: '',
  };

  modeloReceta = this.formbuild.group({
    nombre: ['', Validators.required],
    publicado_por: ['', Validators.required],
    ingrediente: ['', Validators.required],
    descripcion: ['', Validators.required],
    imagen: ['', Validators.required],
    tipo: ['', Validators.required],
    hashtags: ['', Validators.required],
  });

  constructor(
    private formbuild: FormBuilder,
    private recetaService: RecetaService
  ) {}

  ngOnInit(): void {
    this.recetaService
      .getRecetaById(this.recetaService.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.receta = data;
        console.log(this.receta);
      });
  }

  actualizarReceta() {
    if (this.modeloReceta.value.nombre != "") {
      this.receta.nombre = this.modeloReceta.value.nombre;
    }
    if (this.modeloReceta.value.publicado_por != "") {
      this.receta.publicado_por = this.modeloReceta.value.publicado_por;
    }
    if (this.modeloReceta.value.ingrediente != ""){
      this.receta.ingrediente = this.modeloReceta.value.ingrediente;
    }
    if (this.modeloReceta.value.descripcion != "") {
      this.receta.descripcion = this.modeloReceta.value.descripcion;
    }
    if (this.modeloReceta.value.imagen != ""){
      this.receta.imagen = this.modeloReceta.value.imagen;
    }
    if (this.modeloReceta.value.imagen != ""){
      this.receta.imagen = this.modeloReceta.value.imagen;
    }
    if (this.modeloReceta.value.tipo != ""){
      this.receta.tipo = this.modeloReceta.value.tipo;
    }
    if (this.modeloReceta.value.hashtags != ""){
      this.receta.hashtags = this.modeloReceta.value.hashtags;
    }
    console.log(this.receta);
    this.recetaService.editarReceta(this.receta, this.recetaService.id);
    this.modeloReceta.reset();
  }
}
