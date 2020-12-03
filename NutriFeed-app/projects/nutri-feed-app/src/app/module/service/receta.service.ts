import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { Receta } from '../../models/Receta';
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
export class RecetaService {
  endpoint = 'http://localhost:3000/api/allReceta';
  endpointAdd = 'http://localhost:3000/api/addReceta';
  endpointEdit = 'http://localhost:3000/api/editReceta';
  endpointDelete = 'http://localhost:3000/api/deleteReceta';
  endpointGetById = 'http://localhost:3000/api/getReceta';

  errorMessage: any;
  id: any;

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

  getRecetas() {
    console.log('en el servicio');
    return this.http
      .get<Receta[]>(this.endpoint)
      .pipe(retry(3), catchError(this.handleError));
  }

  getRecetaById(id: string) {
    return this.http
      .get<Receta[]>(this.endpointGetById + '/' + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  insertarReceta(recetas: Receta) {
    this.http.post<Receta>(this.endpointAdd, recetas).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error(' error!', error);
      },
    });
  }

  editarReceta(receta: Receta, id: string) {
    this.http.post<Receta>(this.endpointEdit + '/' + id, receta).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error(' error!', error);
      },
    });
  }

  eliminarReceta(id: string) {
    this.http.delete(this.endpointDelete + '/' + id).subscribe({
      next: () => {
        console.log('Receta borrada');
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
}
