import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Post';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const url = `${this.apiUrl}/posts`;
    return this.http.get<Post[]>(url).pipe(
      map(
        (data: Post[]) => {
          return data;
        },
        catchError((error) => {
          return throwError('Something went wrong!');
        })
      )
    );
  }
}
