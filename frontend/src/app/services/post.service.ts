import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://basic-form-angular.herokuapp.com';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  addPost(post: Post): Observable<Post> {
    const url = `${this.apiUrl}/post`;
    return this.http.post<Post>(url, post);
  }
}
