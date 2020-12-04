import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { Progreso } from '../../models/Progreso';
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
export class ProgresoService {
  endpoinRegProg = 'http://localhost:3000/api/registrarProgreso';

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

  registrarProgreso(id: string, progreso: Progreso) {
    this.http
      .post<Progreso>(this.endpoinRegProg + '/' + id, progreso)
      .subscribe({
        next: (data) => {
          console.log('datos', data);
        },
        error: (error) => {
          console.error(' error!', error);
        },
      });
  }
}
