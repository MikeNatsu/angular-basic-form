import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  subscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onSubmit() {
    const newPost: Post = {
      firstName: this.firstName,
      lastName: this.lastName,
      textarea: this.textarea,
    };
    console.log(newPost);
    this.postService.addPost(newPost).subscribe();

    this.firstName = '';
    this.lastName = '';
    this.textarea = '';
  }
}
