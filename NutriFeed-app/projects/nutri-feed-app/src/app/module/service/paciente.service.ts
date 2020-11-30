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
  endpoint = 'http://localhost:3000/api/infoPaciente/5fc53fb84eb8c56e983df1cf';
  endpointAdd = 'http://localhost:3000/api/addPaciente';

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

  getPaciente() {
    console.log('en el servicio');
    return this.http
      .get<Paciente[]>(this.endpoint)
      .pipe(retry(3), catchError(this.handleError));
  }

  insertarPaciente(paciente: Paciente) {
    this.http.post<Paciente>(this.endpointAdd, paciente).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error(' error!', error);
      },
    });
  }
}
