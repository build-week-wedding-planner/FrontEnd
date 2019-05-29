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
  return (
    <Router>
    <div className="App">
      <nav>
        <img src={img} alt='wedding planner portfolio logo' />
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registar-form">Registar</NavLink>
        <NavLink to="/protected">Create Post</NavLink>
      </nav>
      <Route path='/login' component={Login} />
      <Route path='/home' component={HomePage} />
      <Route path='/registar-form' component={RegistarForm} />
      <PrivateRoute exact path='/protected' component={PostForm} />
    </div>
  </Router>
  );
}

export default App;
