import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Receta } from '../../../../models/Receta';
import { RecetaService } from '../../../service/receta.service';

@Component({
  selector: 'app-recetas-feed',
  templateUrl: './recetas-feed.component.html',
  styleUrls: ['./recetas-feed.component.scss']
})
export class RecetasFeedComponent implements OnInit {

  recetas: Receta[] = [];
  recetasFiltro: Receta[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  modeloBuscar = this.formbuild.group({
    ingrediente: ['', Validators.required],
  });

  constructor(
    private recetaService: RecetaService,
    private formbuild: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllRecetas();
  }

  getAllRecetas(){
    this.recetaService
      .getRecetas()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.recetas = data;
      });
  }

  editarReceta(id:string){
    console.log('editar', id);
    this.recetaService.id = id;
  }

  eliminarReceta(id:string){
    console.log('eliminar', id);
    this.recetaService.eliminarReceta(id);
    this.getAllRecetas();
  }

  buscarIngrediente(){
    console.log('ingrediente', this.modeloBuscar.value);
    if (this.modeloBuscar.value.ingrediente == '') {
      this.getAllRecetas();
    } else {
      this.recetaService
        .buscarRecetaIngrediente(this.modeloBuscar.value.ingrediente)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any[]) => {
          // console.log('la data', data);
          this.recetas = data;
        });
    }
  }
}
