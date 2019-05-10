import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  function signout() {
    localStorage.removeItem('token');
    props.history.push('/login');
  }

  if(localStorage.getItem('token')) {
    return (
      <nav>
        <NavLink to="/jokes">Jokes</NavLink>
        {' | '}
        <button onClick={signout}>Sign Out</button>
      </nav>
    )
  } else {
    return (
      <nav>
        <NavLink to="/register">Register</NavLink>
        {' | '}
        <NavLink to="/login">Login</NavLink>
      </nav>
    )
  }
}

export default withRouter(Navbar);