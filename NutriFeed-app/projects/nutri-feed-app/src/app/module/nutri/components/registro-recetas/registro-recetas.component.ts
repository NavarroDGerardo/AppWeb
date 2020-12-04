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
  selectedFile!: File;

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

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
  }

  registrarReceta() {
    const fd = new FormData();
    fd.append('file', this.selectedFile);
    fd.append('nombre', this.modeloReceta.value.nombre);
    fd.append('descripcion', this.modeloReceta.value.descripcion);
    fd.append('tipo', this.modeloReceta.value.tipo);
    fd.append('ingrediente', this.modeloReceta.value.ingrediente);
    fd.append('hashtags', this.modeloReceta.value.hashtag);
    this.recetaService.insertarReceta(fd);
    this.modeloReceta.reset();
  }

}
