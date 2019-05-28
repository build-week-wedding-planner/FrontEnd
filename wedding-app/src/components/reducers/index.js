import { 
    LOGIN_START,
 } from './actions'
  
  const initialState = {
    posts: [],
    error: '',
    logginIn: false
    };
  
    export const reducer = (state = initialState, action) => {
        switch (action.type){
            case LOGIN_START:
                return {
                    ...state,
                    error: '',
                    logginIn: true
                }
          default:
            return state;
        }
  }