import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import {PostService} from './services/post.service';
import {UserService} from './services/user.service';
import { CommentComponent } from './components/comment/comment.component';
import {CommentService} from './services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
