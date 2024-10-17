import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPhoto } from './i-photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAllPhoto(): Observable<iPhoto[]> {
    return this.http.get<iPhoto[]>(this.apiUrl);
  }
  deletePhoto(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
