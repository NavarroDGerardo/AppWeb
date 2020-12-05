import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DiarioService } from '../../../service/diario.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PacienteService } from '../../../service/paciente.service';
import { Diario } from 'projects/nutri-feed-app/src/app/models/Diario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  paciente:any;
  diario: Diario[] = []

  selectedFileDesayuno!: File;
  selectedFileComida!: File;
  selectedFileCena!: File;

  destroy$: Subject<boolean> = new Subject<boolean>();

  modeloDiario = this.formBuild.group({
    desayuno: ['', Validators.required],
    comida: ['', Validators.required],
    cena: ['', Validators.required],
    imgDesayuno: ['', Validators.required],
    imgComida: ['', Validators.required],
    imgCena: ['', Validators.required],
  });

  constructor(
    private formBuild: FormBuilder,
    private diarioS: DiarioService,
    private pacienteService: PacienteService,
    private toastr : ToastrService
  ) {}

  showToastExito(){this.toastr.success('el diario', 'se guardo correctamente')}

  showToast(text1: string, text2: string){
    this.toastr.error(text2, text1); 
  }

  ngOnInit(): void {
    this.pacienteService
      .getPaciente("5fc53fb84eb8c56e983df1cf")
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.paciente = data;
        this.diario = data["diario"];
      });
  }

  onSelectedDesayuno(event: any){
    this.selectedFileDesayuno = <File>event.target.files[0];
  }
  onSelectedComida(event: any){
    this.selectedFileComida = <File>event.target.files[0];
  }
  onSelectedCena(event: any){
    this.selectedFileCena = <File>event.target.files[0];
  }

  registrarDiario() {
    let registrar = true;
    if(this.selectedFileDesayuno == null){
      this.showToast('ingresa una imagen', 'para desayuno');
      registrar = false;
    }
    if(this.selectedFileComida == null){
      this.showToast('ingresa una imagen', 'para comida');
      registrar = false;
    }
    if(this.selectedFileCena == null){
      this.showToast('ingresa una imagen', 'para cena');
      registrar = false;
    }
    if(this.modeloDiario.value.desayuno == ""){
      this.showToast('ingresa una descripcion', 'para desayuno');
      registrar = false;
    }
    if(this.modeloDiario.value.comida == ""){
      this.showToast('ingresa una descripcion', 'para comida');
      registrar = false;
    }
    if(this.modeloDiario.value.cena == ""){
      this.showToast('ingresa una descripcion', 'para cena');
      registrar = false;
    }
    if(registrar){
      const fd = new FormData();
      fd.append('files', this.selectedFileDesayuno);
      fd.append('files', this.selectedFileComida);
      fd.append('files', this.selectedFileCena);
      fd.append('descripcion_desayuno', this.modeloDiario.value.desayuno);
      fd.append('descripcion_comida', this.modeloDiario.value.comida);
      fd.append('descripcion_cena', this.modeloDiario.value.cena);
      this.diarioS.registarDiario("5fc53fb84eb8c56e983df1cf", fd);
      this.modeloDiario.reset();
      this.showToastExito();
    }
  }

  iDesa = "";
  iComida = "";
  iCena = "";
  dDesa = "";
  dComida = "";
  dCena = "";

  desplegarInfo(iDesa: string, iComida: string, iCena: string, dDesa: string, dComida: string, dCena: string){
    this.iDesa = iDesa;
    this.iComida = iComida;
    this.iCena = iCena;
    this.dDesa = dDesa;
    this.dComida = dComida;
    this.dCena = dCena;
  }
}
