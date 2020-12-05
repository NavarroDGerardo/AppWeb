import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { Dieta } from '../../models/Dieta';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, retry, catchError, tap } from 'rxjs/operators';

import { DIETA } from '../../models/Dieta';

@Injectable({
  providedIn: 'root',
})
export class DietaService {
  endpoint =
    'https://api.edamam.com/search?q=chicken&app_id=7ce661c7&app_key=f718a700794dfcb0de84300a9b6f50b3&from=0&to=4&calories=591-722&health=alcohol-free';
  endpoinRegdieta = 'http://localhost:3000/api/registrarDieta';

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

  getApiRecetas() {
    console.log('en el servicio api');
    return this.http.get(this.endpoint);
  }

  getApiRecetasPersonalizado(ing: string, max: string, restriccion: string) {
    console.log('en el servicio api personalizado');
    this.endpoint = `https://api.edamam.com/search?q=${ing}&app_id=7ce661c7&app_key=f718a700794dfcb0de84300a9b6f50b3&from=0&to=${max}&health=${restriccion}`;
    console.log('url nueva', this.endpoint);
    return this.http.get(this.endpoint);
  }

  // registrarDieta(dieta: {
  //   desayuno: string;
  //   comida: string;
  //   cena: string;
  //   colaciones: { colacion1: string; colacion2: string; colacion3: string };
  // }) {
  //   console.log('Registro exitoso', dieta);
  //   DIETA.push(dieta);
  // }

  registrarDieta(id: string, dieta: Dieta) {
    this.http.post<Dieta>(this.endpoinRegdieta + '/' + id, dieta).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error(' error!', error);
      },
    });
  }
}
