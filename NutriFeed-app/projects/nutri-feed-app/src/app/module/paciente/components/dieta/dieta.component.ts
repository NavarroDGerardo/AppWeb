import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DIETA } from '../../../../models/Dieta';
import { DietaService } from '../../../service/dieta.service';
import { RecetaApi } from '../../../../models/RecetaApi';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.scss'],
})
export class DietaComponent implements OnInit {
  modeloBucaApi = this.formbuild.group({
    ingPrincipal: ['', Validators.required],
    maxReceta: ['', Validators.required],
    restriccion: ['', Validators.required],
  });

  dieta = DIETA;

  destroy$: Subject<boolean> = new Subject<boolean>();
  // eslint-disable-next-line @typescript-eslint/ban-types
  dietaRes: Array<Object> | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  hits: any[];
  infoRes: any[];

  resFinal: RecetaApi[] = [];

  constructor(
    private dietaService: DietaService,
    private formbuild: FormBuilder
  ) {
    this.hits = [];
    this.infoRes = [];
  }

  ngOnInit(): void {}

  click(){
    console.log('hola');
    this.dietaService.getApiRecetas().subscribe((data: any) =>{
      this.resFinal = data;
      // console.log('la data', this.resFinal);
      this.hits.push(this.resFinal['hits']);
      console.log('los hit', this.hits);
      this.hits = this.hits[0];
      for (let i = 0; i < 4; i++) {
        this.infoRes.push(this.hits[i]['recipe']);
      }
      console.log('info res', this.infoRes);
      console.log('info res count', this.infoRes.length);
    });
  }

  buscar(){
    console.log('hi', this.modeloBucaApi.value);
    this.dietaService
      .getApiRecetasPersonalizado(
        this.modeloBucaApi.value.ingPrincipal,
        this.modeloBucaApi.value.maxReceta,
        this.modeloBucaApi.value.restriccion
      )
      .subscribe((data: any) => {
        this.resFinal = data;
        // console.log('la data', this.resFinal);
        this.hits.push(this.resFinal['hits']);
        // console.log('los hit', this.hits);
        this.hits = this.hits[0];
        for (let i = 0; i < this.hits.length; i++) {
          this.infoRes.push(this.hits[i]['recipe']);
        }
        // console.log('info res', this.infoRes);
        // console.log('info res count', this.infoRes.length);
      });
    this.modeloBucaApi.reset();
  }
}
