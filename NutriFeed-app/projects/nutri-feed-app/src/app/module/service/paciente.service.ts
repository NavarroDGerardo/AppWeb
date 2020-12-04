import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { Paciente } from '../../models/Paciente';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  endpointGetById = 'http://localhost:3000/api/infoPaciente';
  endpointAdd = 'http://localhost:3000/api/addPacienteFoto';
  endPointGetAll = 'http://localhost:3000/api/GetAllPaciente';
  endPointDelete = 'http://localhost:3000/api/deletePaciente';
  endPointEdit = 'http://localhost:3000/api/editePaciente';
  endPointBuscarNom = 'http://localhost:3000/api/getPacienteNombre';
  endPointBuscarApe = 'http://localhost:3000/api/getPacienteApellido';

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

  getPaciente(id: string) {
    return this.http
      .get<Paciente[]>(this.endpointGetById + '/' + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  getPacienteNombre(buscar: string) {
    return this.http
      .get<Paciente[]>(this.endPointBuscarNom + '/' + buscar)
      .pipe(retry(3), catchError(this.handleError));
  }

  getPacienteApellido(buscar: string) {
    return this.http
      .get<Paciente[]>(this.endPointBuscarNom + '/' + buscar)
      .pipe(retry(3), catchError(this.handleError));
  }

  getAllPaciente(){
    return this.http
      .get<Paciente[]>(this.endPointGetAll)
      .pipe(retry(3), catchError(this.handleError));
  }

  insertarPaciente(fd: FormData) {
    this.http.post<FormData>(this.endpointAdd, fd).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error(' error!', error);
      },
    });
  }

  editarPaciente(paciente: Paciente, id: string){
    this.http.post<Paciente>(this.endPointEdit + '/' + id, paciente).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error(' error!', error);
      },
    });
  }

  eliminarPaciente(id: string){
    this.http.delete(this.endPointDelete + '/' + id).subscribe({
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
