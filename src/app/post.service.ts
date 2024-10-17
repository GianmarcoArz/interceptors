import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPhoto } from './i-photo';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAllPhoto(): Observable<iPhoto[]> {
    return this.http.get<iPhoto[]>(this.apiUrl).pipe(
      catchError((error) => {
        return throwError(() => {
          let message = '';
          if (error.status === 404) {
            message = ' non ho trovato nulla ';
          } else if (error.status === 500) {
            message = ' errore nella richiesta ';
          }
          return message;
        });
      })
    );
  }
  deletePhoto(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
