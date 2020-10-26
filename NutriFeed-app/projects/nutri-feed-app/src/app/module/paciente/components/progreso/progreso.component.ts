import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms'
import { PROGRESO } from '../../../../models/Progreso';
import { ProgresoService } from '../../../service/progreso.service'
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgresoComponent implements OnInit {

  progreso = PROGRESO;

  modeloProgreso = this.formBuild.group (
    {
      imc: ['', Validators.required],
      kg: ['', Validators.required],
      fecha: new Date()
    }
  );

  constructor(private formBuild:FormBuilder, private progresoS:ProgresoService) { }

  ngOnInit(): void {
  }

  registrarProgreso(){
    console.log(this.modeloProgreso.value)
    this.progresoS.registrarProgreso(this.modeloProgreso.value)
  }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
