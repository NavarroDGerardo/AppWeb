import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Horario } from '../../../../models/Horario';
import { NutriologoService } from '../../../service/nutriologo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {
  pacientes: Horario[] = [];
  p: number = 1;

  destroy$: Subject<boolean> = new Subject<boolean>();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private nutriService: NutriologoService,
    private toastr: ToastrService
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    this.getHorarioNutri();
    // this.nutriService
    //   .getHorario()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data: any[]) => {
    //     this.pacientes = data;
    //   });
  }

  showToast(texto1:string, texto2:string){
    this.toastr.error(texto2, texto1);
  }

  getHorarioNutri(){
    this.nutriService
      .getHorario()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.pacientes = data;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  editar(id: string){
    // console.log('Click editar', id);
    this.nutriService.id = id;
  }

  eliminar(id: string) {
    console.log('Click eliminar', id);
    this.nutriService.eliminarPacienteHorario(id);
    this.showToast('Eliminaste al usuario', `con id ${id}`);
    this.getHorarioNutri();
    this.getHorarioNutri();
  }
}
