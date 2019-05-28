import axios from 'axios';

export const LOGIN_START = "LOGIN_START";

const baseURL = "http://localhost:5000/api";

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

export const ADD_PLANNER_START = "ADD_PLANNER_START";
export const ADD_PLANNER_SUCCESS = "ADD_PLANNER_SUCCESS";
export const ADD_PLANNER_FAIL = "ADD_PLANNER_FAIL";

export const addNewPlanner = planner => dispatch => {
    dispatch({ type: ADD_PLANNER_START})
    return axios
      .post(`${baseURL}`, planner)
      .then(res => {
        dispatch({ type: ADD_PLANNER_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log('Adding Wedding Planner failed: ', err.response)
        dispatch({ type: ADD_PLANNER_FAIL, payload: err.response})
      })
  }