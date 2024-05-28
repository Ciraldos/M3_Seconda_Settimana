import { Component, ViewChild } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  post!: PostInterface
  related: PostInterface[] = [];
  posts: PostInterface[] = [];
  tags: string[] = [];
  postTags: PostInterface[] = [];

  @ViewChild("singlePost") singlePost!: SinglePostComponent

  constructor(private postService: PostServiceService) {}

  ngOnInit(){
    this.posts = this.postService.posts;
    this.related = this.postService.getRandomPosts(4)
    this.post = this.postService.topPost
    this.tags = this.postService.getTags()
  }

  filterByTag(tag: string): void {
    this.posts = this.postService.getPostsForTag(tag);
  }

  editPost() {
    alert("Edit successful!")
  }
}
