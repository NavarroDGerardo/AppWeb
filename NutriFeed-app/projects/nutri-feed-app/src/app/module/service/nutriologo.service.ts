import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { Horario } from '../../models/Horario';

@Injectable({
  providedIn: 'root',
})
export class NutriologoService {
  endpoint = 'http://localhost:3000/api/showHorario';
  endpointAdd = 'http://localhost:3000/api/addHorario';
  endpointDelete = 'http://localhost:3000/api/deletePacienteHorario';
  endpointEdit = 'http://localhost:3000/api/editPacienteHorario';
  endpointGetById = 'http://localhost:3000/api/getPacienteHorario';

  status: any;
  errorMessage: any;

  id:any;

  constructor(private http: HttpClient) {}

  private extraData(res: Response) {
    const body = res;

    return body || {};
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getHorario() {
    return this.http
      .get<Horario[]>(this.endpoint)
      .pipe(retry(3), catchError(this.handleError));
  }

  getHorarioPaciente(id: string) {
    return this.http
      .get<Horario[]>(this.endpointGetById + '/' + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  insertarPacienteHorario(horario: Horario) {
    this.http.post<Horario>(this.endpointAdd, horario).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error(' error!', error);
      },
    });
  }

  editarPacienteHorario(horario: Horario, id: string) {
    this.http.post<Horario>(this.endpointEdit + '/' + id, horario).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error(' error!', error);
      },
    });
  }

  eliminarPacienteHorario(id: string) {
    this.http.delete(this.endpointDelete + '/' + id).subscribe({
      next: () => {
        this.status = 'Delete successful';
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
}
