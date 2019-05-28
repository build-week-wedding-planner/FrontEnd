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