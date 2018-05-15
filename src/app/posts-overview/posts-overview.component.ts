import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { Post } from '../posts-shared/post.model';
import { PostsService } from '../posts-shared/posts.service';

@Component({
  selector: 'app-posts-overview',
  templateUrl: './posts-overview.component.html',
  styleUrls: ['./posts-overview.component.css']
})
export class PostsOverviewComponent implements OnChanges {
  @Input() userId: number;
  posts: Post[];

  constructor(private postService: PostsService) {}

  getPosts() {
    console.log('Fetching User posts');
    return this.postService
      .getUserPosts(this.userId)
      .subscribe(posts => (this.posts = posts));
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const changedUserId = changes['userId'];
    console.log(changedUserId);
    if (changedUserId.previousValue !== changedUserId.currentValue) {
      console.log('user id changed');
      this.getPosts();
    }
  }
}
