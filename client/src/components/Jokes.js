import React from 'react';
import axios from 'axios';
import withAuth from '../utils/withAuth';

class Jokes extends React.Component {
  state = {
    jokes: [],
  }

  componentDidMount() {
    const url = 'http://localhost:3300/api/jokes';
    const token = localStorage.getItem('token');
    const reqConfig = {
      headers: {
        authorization: token,
      }
    }
    axios.get(url, reqConfig)
      .then(res => {
        const jokes = res.data;
        this.setState({ jokes });
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <>
        <h2>Dad Jokes</h2>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>
              {joke.joke}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default withAuth(Jokes);