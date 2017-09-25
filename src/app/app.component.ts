 
import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Post} from './reducers/post.model';
import * as PostActions from './reducers/post.actions';

export interface AppState{
  message : string;
  post: Post
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message : string
  post : Observable<Post>
  text: string

  constructor(private store: Store<AppState>){
       this.store.subscribe(state=> this.message = state.message);
       console.log(this.message);

       this.post = this.store.select('post');

  }

  editText(){
    this.store.dispatch(new PostActions.EditText(this.text))
  }


  resetPost()
  {
    this.store.dispatch(new PostActions.Reset())
  }

  upvote(){
    this.store.dispatch(new PostActions.Upvote())
  }

  downvote(){
    this.store.dispatch(new PostActions.Downvote())
  }




  spanishMessage(){
    this.store.dispatch({type: 'Spanish'})
  }

  frenchMessage(){
    this.store.dispatch({type: 'French'})
  }

}
