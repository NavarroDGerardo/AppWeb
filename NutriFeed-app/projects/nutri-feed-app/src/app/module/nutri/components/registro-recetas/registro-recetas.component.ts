import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecetaService } from '../../../service/receta.service';
import { ToastrService } from 'ngx-toastr';

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
    fecha: ['', Validators.required],
  });

  constructor(
    private formbuild: FormBuilder,
    private recetaService: RecetaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
  }

  formatDate(date: Date){
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    const year = String(date.getFullYear());
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return `${day}/${month}/${year}`;
  }

  showToastExito(){
    this.toastr.success('la receta', 'Se registró con éxito');
  }

  showToastError(texto1:string, texto2:string){
    this.toastr.error(texto2, texto1);
  }

  registrarReceta() {
    if (this.modeloReceta.value.nombre == '') {
      this.showToastError('Nombre incorrecto', 'no puede ser vacío');
    } else if (this.modeloReceta.value.descripcion ==  '') {
      this.showToastError('Descripción incorrecta', 'no puede ser vacía');
    } else if (this.modeloReceta.value.tipo ==  '') {
      this.showToastError('Tipo incorrecta', 'no puede ser vacío');
    } else if (this.modeloReceta.value.ingrediente ==  '') {
      this.showToastError('Ingrediente incorrecto', 'no puede ser vacío');
    } else if (this.modeloReceta.value.hashtags ==  '') {
      this.showToastError('Hashtags incorrectos', 'no pueden ser vacíos');
    } else {
      const fechaS = new Date();
      this.modeloReceta.value.fecha = this.formatDate(fechaS);

      const fd = new FormData();
      fd.append('file', this.selectedFile);
      fd.append('nombre', this.modeloReceta.value.nombre);
      fd.append('descripcion', this.modeloReceta.value.descripcion);
      fd.append('tipo', this.modeloReceta.value.tipo);
      fd.append('ingrediente', this.modeloReceta.value.ingrediente);
      fd.append('hashtags', this.modeloReceta.value.hashtags);
      fd.append('fecha', this.modeloReceta.value.fecha);
      this.recetaService.insertarReceta(fd);
      this.modeloReceta.reset();
      this.showToastExito();
    }
  }
}
