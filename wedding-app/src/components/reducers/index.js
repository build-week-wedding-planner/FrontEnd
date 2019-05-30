import { 
    LOGIN_START,
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL,
    ADD_PLANNER_START,
    ADD_PLANNER_SUCCESS,
    ADD_PLANNER_FAIL,
    ADD_POST_START,
    ADD_POST_SUCCESS,
    ADD_POST_FAIL,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
    EDIT_POST_START,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAIL
 } from '../actions'
  
  const initialState = {
    posts: [],
    error: '',
    logginIn: false,
    fetchingPost: false,
    addingNewPlanner: false,
    plannersList: [],
    addingNewPost: false,
    deletingPost: false,
    editingPost: false,
    };
  
    const reducer = (state = initialState, action) => {
        switch (action.type){
            case LOGIN_START:
                return {
                    ...state,
                    error: '',
                    logginIn: true
                }
            case FETCH_POST_START:
                return {
                    ...state,
                    fetchingPost: true
                }
            case FETCH_POST_SUCCESS:
                return {
                    ...state,
                    error: '',
                    fetchingPost: false,
                    posts: action.payload
                }
            case FETCH_POST_FAIL:
                return {
                    ...state,
                    fetchingPost: false,
                    error: action.payload
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
            case ADD_POST_START:
                return {
                    ...state,
                    addingNewPost: true
                }
            case ADD_POST_SUCCESS:
                return {
                    ...state,
                    addingNewPost: false,
                    error: '',
                    posts: action.payload
                }
            case ADD_POST_FAIL:
                return {
                    ...state,
                    addingNewPost: false,
                    error: action.payload
                }
            case DELETE_POST_START:
                return {
                    ...state,
                    deletingPost: true
                }
            case DELETE_POST_SUCCESS:
                return {
                    ...state,
                    deletingPost: false,
                    error: '',
                    posts: action.payload
                }
            case DELETE_POST_FAIL:
                return {
                    ...state,
                    deletingPost: false,
                    error: action.payload
                }
            case EDIT_POST_START:
                return {
                    ...state,
                    editingPost: true
                }
            case EDIT_POST_SUCCESS:
                return {
                    ...state,
                    editingPost: false,
                    error: '',
                    posts: action.payload
                }
            case EDIT_POST_FAIL:
                return {
                    ...state,
                    editingPost: false,
                    error: action.payload
                }
            default:
                return state;
        }
  }

  export default reducer