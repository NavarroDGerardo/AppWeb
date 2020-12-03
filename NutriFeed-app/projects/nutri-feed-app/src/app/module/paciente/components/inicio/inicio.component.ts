import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DiarioService } from '../../../service/diario.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PacienteService } from '../../../service/paciente.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  paciente:any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  modeloDiario = this.formBuild.group({
    desayuno: ['', Validators.required],
    comida: ['', Validators.required],
    cena: ['', Validators.required],
    imgDesayuno: ['', Validators.required],
    imgComida: ['', Validators.required],
    imgCena: ['', Validators.required],
  });

  constructor(private formBuild: FormBuilder, private diarioS: DiarioService, private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService
      .getPaciente("5fc53fb84eb8c56e983df1cf")
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.paciente = data;
      });
  }

  registrarDiario() {
    console.log(this.modeloDiario.value);
    this.diarioS.registrarDiario(this.modeloDiario.value);
  }
}
