/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { PROGRESO } from '../../../../models/Progreso';
import { ProgresoService } from '../../../service/progreso.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PacienteService } from '../../../service/paciente.service';
import { Paciente } from '../../../../models/Paciente';
import { Progreso } from '../../../../models/Progreso';
import { takeUntil } from 'rxjs/operators';
import { from, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss'],
})
export class ProgresoComponent implements OnInit {
  fechaCompleta = new Date();
  dia = this.fechaCompleta.getDay();
  mes = this.fechaCompleta.getMonth();
  anio = this.fechaCompleta.getFullYear();
  imcV: any[] = [];
  fechaV: any[] = [];
  pesoV: any[] = [];

  paciente: any;

  // progresoM: Progreso = {
  //   imc: '',
  //   peso: '',
  //   fecha: '',
  // };
  progresoM: Progreso[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  modeloProgreso = this.formBuild.group({
    imc: ['', Validators.required],
    peso: ['', Validators.required],
    fecha: `${this.dia}/${this.mes}/${this.anio}`,
  });

  constructor(
    private formBuild: FormBuilder,
    private progresoService: ProgresoService,
    private pacienteService: PacienteService,
    private toastrService: ToastrService
  ) {}

  showToastExito(){ this.toastrService.success('el progreso', 'se registro correctamente'); }
  showToastError(text1:string, texto2:string){this.toastrService.error(texto2, text1);}

  ngOnInit(): void {
    this.getInfoPaciente();
  }

  getInfoPaciente(){
    this.pacienteService
      .getPaciente("5fc53fb84eb8c56e983df1cf")
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.paciente = data;
        this.progresoM = data['progreso'];
        // console.log('data', this.progresoM);
        this.obtenerValores();
      });
  }

  registrarProgreso() {
    // console.log(this.modeloProgreso.value);
    let canSubmit = true;

    if(this.modeloProgreso.value.imc == ""){
      this.showToastError('IMC', 'por favor ingresar datos validos');
      canSubmit = false;
    }else if(isNaN(this.modeloProgreso.value.imc)){
        this.showToastError('IMC', 'por favor ingresar datos validos');
        canSubmit = false;
    }
    if(this.modeloProgreso.value.peso == ""){
        this.showToastError('Peso', 'por favor ingresar datos validos');
        canSubmit = false;
    }else if(isNaN(this.modeloProgreso.value.peso)){
        this.showToastError('Peso', 'por favor ingresar datos validos');
        canSubmit = false;
    }
    if(canSubmit){
      this.progresoService.registrarProgreso('5fc53fb84eb8c56e983df1cf', this.modeloProgreso.value);
      this.modeloProgreso.reset();
      this.getInfoPaciente();
      this.imcV.push(this.modeloProgreso.value.imc);
      this.fechaV.push(this.modeloProgreso.value.fecha);
      this.pesoV.push(this.modeloProgreso.value.peso);
      this.showToastExito();
    }
  }

  obtenerValores() {
    console.log(this.progresoM.length);
    for (let i = 0; i < this.progresoM.length; i++) {
      this.imcV.push(this.progresoM[i].imc);
      this.fechaV.push(this.progresoM[i].fecha);
      this.pesoV.push(this.progresoM[i].peso);
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
