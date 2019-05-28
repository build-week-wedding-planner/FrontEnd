import { 
    LOGIN_START,
 } from '../actions'
  
  const initialState = {
    posts: [],
    error: '',
    logginIn: false
    };
  
    const reducer = (state = initialState, action) => {
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

  export default reducer