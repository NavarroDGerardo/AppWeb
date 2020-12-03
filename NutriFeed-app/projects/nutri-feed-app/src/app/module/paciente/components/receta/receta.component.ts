import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Receta } from '../../../../models/Receta';
import { RecetaService } from '../../../service/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  recetas: Receta[] = [];

  modeloBuscar = this.formbuild.group({
    buscar: ['', Validators.required],
  });

  destroy$: Subject<boolean> = new Subject<boolean>();

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

  buscar(){
    // console.log('ingrediente', this.modeloBuscar.value);
    if (this.modeloBuscar.value.buscar == '') {
      this.getAllRecetas();
    } else {
      this.recetaService
        .buscarRecetaIngrediente(this.modeloBuscar.value.buscar)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any[]) => {
          // console.log('la data', data);
          this.recetas = data;
        });
    }

    // this.recetaService
    //   .buscarRecetaNombre(this.modeloBuscar.value.buscar)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data: any[]) => {
    //     this.recetas = data;
    //   });

    // this.recetaService
    //   .buscarRecetaHashtag(this.modeloBuscar.value.buscar)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data: any[]) => {
    //     this.recetas = data;
    //   });
  }
}
