import { 
    LOGIN_START,
    ADD_PLANNER_START,
    ADD_PLANNER_SUCCESS,
    ADD_PLANNER_FAIL,

 } from '../actions'
  
  const initialState = {
    posts: [],
    error: '',
    logginIn: false,
    addingNewPlanner: false,
    plannersList: []
    };
  
    const reducer = (state = initialState, action) => {
        switch (action.type){
            case LOGIN_START:
                return {
                    ...state,
                    error: '',
                    logginIn: true
                }
            case ADD_PLANNER_START:
                return {
                ...state,
                addingNewPlanner: true
                }
            case ADD_PLANNER_SUCCESS:
                return {
                    ...state,
                    addingNewPlanner: false,
                    error: '',
                    plannersList: action.payload
                }
            case ADD_PLANNER_FAIL:
                return {
                    ...state,
                    addingNewPlanner: false,
                    error: action.payload
                }
            default:
                return state;
        }
  }

  export default reducer