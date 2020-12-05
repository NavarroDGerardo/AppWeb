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
  nombreReceta = "";
  IngredienteReceta = "";
  descripcionReceta = "";
  imagenReceta = "";

  selection = '';

  recetas: Receta[] = [];
  recetasFiltro: Receta[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  modeloBuscar = this.formbuild.group({
    buscar: ['', Validators.required],
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

  viewReceta(nombreReceta: string, IngredienteReceta: string, descripcionReceta: string, imagenReceta: string){
    this.nombreReceta = nombreReceta;
    this.IngredienteReceta = IngredienteReceta;
    this.descripcionReceta = descripcionReceta;
    this.imagenReceta = imagenReceta;
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

  buscar() {
    // console.log('ingrediente', this.modeloBuscar.value);

    console.log('selection', this.selection);
    if (this.selection == 'nombre' && this.modeloBuscar.value.buscar != '') {
      this.recetaService
        .buscarRecetaNombre(this.modeloBuscar.value.buscar)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any[]) => {
          this.recetas = data;
        });
    } else if (
      this.selection == 'hashtag' &&
      this.modeloBuscar.value.buscar != ''
    ) {
      this.recetaService
        .buscarRecetaHashtag(this.modeloBuscar.value.buscar)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any[]) => {
          this.recetas = data;
        });
    } else if (
      this.selection == 'ingrediente' &&
      this.modeloBuscar.value.buscar != ''
    ) {
      this.recetaService
        .buscarRecetaIngrediente(this.modeloBuscar.value.buscar)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any[]) => {
          // console.log('la data', data);
          this.recetas = data;
        });
    } else {
      this.getAllRecetas();
    }
  }

  selectChange(event: any){
    this.selection = event.target.value;
  }
}
