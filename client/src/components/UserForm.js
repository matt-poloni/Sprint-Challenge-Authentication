import React from 'react';
import axios from 'axios';

class UserForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChanges = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const path = this.props.location.pathname;
    const url = `http://localhost:3300/api${path}`;
    axios.post(url, this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch(err => {
        console.error(err);
      })
    this.setState({
        username: '',
        password: '',
    })
  };

  render() {
    const text = this.props.location.pathname === '/register'
      ? 'Register' : 'Login';

    return (
      <>
        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChanges}
              required
            />
          </div>
          <button type="submit">{text}</button>
        </form>
      </>
    )
  }
}

export default UserForm;