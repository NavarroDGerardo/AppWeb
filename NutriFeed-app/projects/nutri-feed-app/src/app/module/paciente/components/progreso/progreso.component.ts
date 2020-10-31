/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { PROGRESO } from '../../../../models/Progreso';
import { ProgresoService } from '../../../service/progreso.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss'],
})
export class ProgresoComponent implements OnInit {
  progreso = PROGRESO;
  fechaCompleta = new Date();
  dia = this.fechaCompleta.getDay();
  mes = this.fechaCompleta.getMonth();
  anio = this.fechaCompleta.getFullYear();
  imcV : any[] = []
  fechaV : any[] = []
  pesoV : any[] = []

  modeloProgreso = this.formBuild.group({
    imc: ['', Validators.required],
    kg: ['', Validators.required],
    fecha: `${this.dia}/${this.mes}/${this.anio}`,
  });

  constructor(
    private formBuild: FormBuilder,
    private progresoS: ProgresoService
  ) {}

  ngOnInit(): void {
    this.obtenerValores();
  }

  registrarProgreso() {
    console.log(this.modeloProgreso.value);
    this.progresoS.registrarProgreso(this.modeloProgreso.value);
    this.imcV.push(this.modeloProgreso.value.imc);
    this.fechaV.push(this.modeloProgreso.value.fecha);
    this.pesoV.push(this.modeloProgreso.value.kg);
  }

  obtenerValores() {
    for (let i = 0; i < this.progreso.length; i++) {
      this.imcV.push(this.progreso[i].imc);
      this.fechaV.push(this.progreso[i].fecha);
      this.pesoV.push(this.progreso[i].kg);
    }
  }

  lineChartData: ChartDataSets[] = [{ data: this.pesoV, label: 'Peso en kg' }];

  lineChartLabels: Label[] = this.fechaV;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#f39233',
      backgroundColor: '#f1e189',
      pointBackgroundColor: '#d7385e',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  lineChartData2: ChartDataSets[] = [{ data: this.imcV, label: 'IMC' }];

  lineChartColors2: Color[] = [
    {
      borderColor: '#01c5c4',
      backgroundColor: '#b8de6f',
      pointBackgroundColor: '#e7e7de',
    },
  ];
}
