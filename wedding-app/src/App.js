import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import PostForm from './components/PostForm'
import RegistarForm from './components/RegistarForm';
import HomePage from './components/HomePage';

import img from './WPP.png'

import './App.scss';

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
          <nav>
            <img src={img} alt='wedding planner portfolio logo' />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/protected">Create Post</NavLink>
            <a onClick={() => logout()} href="#" className="activeNavButton">Logout</a>
          </nav>
        ) : (
          <nav>
            <img src={img} alt='wedding planner portfolio logo' />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registar-form">Register as a Wedding Planner</NavLink>
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
