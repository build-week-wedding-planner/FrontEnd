import axios from 'axios';

export const LOGIN_START = "LOGIN_START";

const baseURL = "https://weddingplannah.herokuapp.com";

export const login = creds => dispatch => {
    dispatch({
      type: LOGIN_START
    });
    return axios
      .post(`${baseURL}/login`, creds)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
      })
      .catch();
  };

export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';

export const getPost = () => dispatch => {
    dispatch({ type: FETCH_POST_START });
    axios
      .get(`${baseURL}/events`, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log('Getting Wedding Posts Failed: ', err.response);
        dispatch({ type: FETCH_POST_FAIL, payload: err.response });
      });
};

export const ADD_PLANNER_START = "ADD_PLANNER_START";
export const ADD_PLANNER_SUCCESS = "ADD_PLANNER_SUCCESS";
export const ADD_PLANNER_FAIL = "ADD_PLANNER_FAIL";

export const addNewPlanner = planner => dispatch => {
    dispatch({ type: ADD_PLANNER_START})
    return axios
      .post(`${baseURL}/register`, planner, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({ type: ADD_PLANNER_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log('Adding Wedding Planner failed: ', err.response)
        dispatch({ type: ADD_PLANNER_FAIL, payload: err.response})
      })
  }

export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAIL = "ADD_POST_FAIL";

export const addNewPost = post => dispatch => {
    dispatch({ type: ADD_POST_START})
    return axios
      .post(`${baseURL}/addevent`, post, 
      // {
      //   // headers: { Authorization: localStorage.getItem('token') }
      // }
      )
      .then(res => {
        dispatch({ type: ADD_POST_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log('Adding Wedding Post failed: ', err.response)
        dispatch({ type: ADD_POST_FAIL, payload: err.response})
      })
  }

export const DELETE_POST_START = 'DELETE_POST_START';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';

export const deletePost = id => dispatch => {
  dispatch({ type: DELETE_POST_START })
  axios 
    .delete(`${baseURL}/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: DELETE_POST_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('Deleting Wedding Post failed: ', err.response)
      dispatch({ type: DELETE_POST_FAIL, payload: err.response})
    })
}

export const EDIT_POST_START = 'EDIT_POST_START';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAIL = 'EDIT_POST_FAIL';

export const editPost = post => dispatch => {
  dispatch({ type: EDIT_POST_START });
  return axios
    .put(`${baseURL}/${post.id}`, post, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: EDIT_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Editing Wedding Post failed: ', err.response)
      dispatch({ type: EDIT_POST_FAIL, payload: err.response });
    });
};