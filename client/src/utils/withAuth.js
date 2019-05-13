import React from 'react';
import { Redirect } from 'react-router-dom';

export default function(Component) {
  return class Auth extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      return <>{token ? <Component {...this.props} /> : <Redirect to='/login' />}</>;
    }
  };
}