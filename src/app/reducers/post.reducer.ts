
import {Action} from '@ngrx/store';
import {AppState} from '../app.component'
import * as PostActions from '../reducers/post.actions';
import {Post} from '../reducers/post.model';

///Default app State
const defaultState : Post = {
    text : 'Hello I am the default post',
    likes : 0
}

///Helper Function to create new state object
const newState = (state, newData) =>{
    return Object.assign({},state, newData)
}

export function postReducer(state : Post = defaultState, action : any)
{
    console.log("Post reducer: " + action, state);
    switch(action.type){
        case PostActions.EDIT_TEXT :
            return newState(state,{text:action.payload});
        
        case PostActions.UPVOTE: 
            return newState(state,{likes:state.likes + 1});

        case PostActions.DOWNVOTE: 
            return newState(state,{likes:state.likes - 1});
        
        case PostActions.RESET:
            return defaultState;
        
        default:
        return state;
    }
}