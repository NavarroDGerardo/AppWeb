import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { DIARIO } from '../../models/Diario';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DiarioService {
  endPointRegDiario = 'http://localhost:3000/api/addDiario';

  constructor(private http: HttpClient) {}

  private extraData(res: Response){
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

  registarDiario(id: string, fd: FormData){
    this.http.post<FormData>(this.endPointRegDiario + '/' + id, fd).subscribe({
      next: (data) => {
        console.log('datos', data);
      },
      error: (error) => {
        console.error('error!', error);
      }
    })
  }
}
