import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import PostForm from './components/PostForm'
import RegistarForm from './components/RegistarForm';
import HomePage from './components/HomePage';

import img from './WPP.png'

import './App.scss';

var navImg = {
  'margin': '5%',
  'height': 'auto'
}

function App() {
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("Authorization");
    window.location.reload();
  };
  return (
    <Router>
    <div className="App">
        {localStorage.getItem('token') ? (
          <nav class="navbar">
            <div class="navbar-brand">
              <img src={img} alt='wedding planner portfolio logo' style={navImg}/>
            </div>
            <div class="navbar-end">
              <a class="navbar-item">
                <NavLink to="/">Home</NavLink>
              </a>
              <a class="navbar-item">
                <NavLink to="/protected">Create Post</NavLink>
              </a>
              <a class="navbar-item">
                <a onClick={() => logout()} href="#" className="activeNavButton">Logout</a>
              </a>
            </div>
          </nav>
        ) : (
          <nav class="navbar">
            <div class="navbar-brand">
              <img src={img} alt='wedding planner portfolio logo' style={navImg}/>
            </div>
            <div class="navbar-end">
              <a class="navbar-item">
                <NavLink to="/">Home</NavLink>
              </a>
              <a class="navbar-item">
                <NavLink to="/login">Login</NavLink>
              </a>
              <a class="navbar-item">
                <NavLink to="/registar-form">Register as a Wedding Planner</NavLink>
              </a>
            </div>
          </nav>
        )}
      <Route exact path='/' component={HomePage} />
      <Route path='/login' component={Login} />
      <Route path='/registar-form' component={RegistarForm} />
      <PrivateRoute exact path='/protected' component={PostForm} />
    </div>
  </Router>
  );
}

export default App;
