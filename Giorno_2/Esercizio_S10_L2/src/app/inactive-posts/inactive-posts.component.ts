import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  postsInactive: PostInterface[] = [];
  constructor(private postService: PostServiceService) {}

  ngOnInit(){
    this.postsInactive = this.postService.inactivePosts;
  }
}
