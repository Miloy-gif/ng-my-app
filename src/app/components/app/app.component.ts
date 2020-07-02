import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];
  posts: Post[];

  constructor(private userService: UserService, private postService: PostService ) {
  userService.users().subscribe(value => this.users = value);
  postService.posts().subscribe(value => this.posts = value);
 }
}
