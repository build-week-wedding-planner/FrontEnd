import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import PostForm from './components/PostForm';
import RegistarForm from './components/RegistarForm';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/registar">Registar</Link>
        <NavLink to="/protected">Create Post</NavLink>
      </nav>
      <Route path='/login' component={Login} />
      <Route path='/login' component={RegistarForm} />
      <PrivateRoute exact path='/protected' component={PostForm} />
    </div>
  </Router>
  );
}

export default App;
