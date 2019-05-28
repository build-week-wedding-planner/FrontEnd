import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import HomePage from './components/HomePage';
import PostForm from './components/PostForm';
import RegistarForm from './components/RegistarForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/registar">Registar</Link>
          <NavLink to="/protected"></NavLink>
          <NavLink to="/"></NavLink>
        </nav>
        <Route path='/login' component={Login} />
        <Route path='/registar' component={RegistarForm} />
        <PrivateRoute exact path='/protected' component={PostForm} />
        {/* <PrivateRoute exact path="/" component={} /> */}
      </div>
    </Router>
  );
}

export default App;
