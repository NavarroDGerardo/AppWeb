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
    maxReceta: ['', Validators.required],
  });

  dieta = DIETA;

  destroy$: Subject<boolean> = new Subject<boolean>();
  // eslint-disable-next-line @typescript-eslint/ban-types
  dietaRes: Array<Object> | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  hits: any[];
  infoRes: any[];

  resFinal: RecetaApi[] = [];
  selectionIng = 'chicken';
  selectionRes = 'alcohol-free';

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
    console.log('hi', this.selectionIng);
    console.log('hi', this.modeloBucaApi.value.maxReceta);
    console.log('hi', this.selectionRes);
    this.dietaService
      .getApiRecetasPersonalizado(
        this.selectionIng,
        this.modeloBucaApi.value.maxReceta,
        this.selectionRes
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

  selectChangeIng(event: any){
    this.selectionIng = event.target.value;
  }

  selectChangeRes(event: any){
    this.selectionRes = event.target.value;
  }
}
