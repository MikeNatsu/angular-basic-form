import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  firstName: string;
  lastName: string;
  textarea: string;

  constructor(private postService: PostService) {}
  ngOnInit(): void {}

  onSubmit() {
    const newPost: Post = {
      firstName: this.firstName,
      lastName: this.lastName,
      textarea: this.textarea,
    };

    this.postService.addPost(newPost).pipe(take(1)).subscribe();

    this.firstName = '';
    this.lastName = '';
    this.textarea = '';
  }
}
