import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  postsActive: PostInterface[] = [];

  constructor( private postService: PostServiceService) {
  }

  ngOnInit(){
    this.postsActive = this.postService.activePosts;
  }

}
