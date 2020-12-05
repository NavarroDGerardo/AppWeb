import { Component, OnInit } from '@angular/core';
import { Diario } from 'projects/nutri-feed-app/src/app/models/Diario';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PacienteService } from '../../../service/paciente.service';

@Component({
  selector: 'app-ver-perfil-paciente',
  templateUrl: './ver-perfil-paciente.component.html',
  styleUrls: ['./ver-perfil-paciente.component.scss'],
})
export class VerPerfilPacienteComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  paciente:any;
  diario: Diario[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.getPaciente();
  }

  ngDestoy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getPaciente(){
    this.pacienteService
      .getPaciente(this.pacienteService.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        console.log('la data', data);
        this.paciente = data;
        this.diario = data["diario"];
      });
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

  agregarDieta(){
    console.log(this.pacienteService.id);
  }
}
