
import {Action} from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action : Action){
    //console.log("reducer: " + action.type, state)

    switch(action.type)
    {
         case 'Spanish':
            return state = 'Hola Mundo'
         case 'French':
            return state = 'Bonjouor le monde' 

         default:
            return state;   
    }
}
