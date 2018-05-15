import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getUserPosts(userId: number) {
    return this.http.get<Post[]>(`${this.apiUrl}?userId=${userId}`);
  }
}
