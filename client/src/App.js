import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import Jokes from './components/Jokes';
import Default from './components/Default';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route
              path="/register"
              render={props => (
                <UserForm {...props} />
              )}
            />
            <Route
              path="/login"
              render={props => (
                <UserForm {...props} />
              )}
            />
            <Route
              path="/jokes"
              render={props => (
                <Jokes {...props} />
              )}
            />
            <Route
              path="/"
              render={props => (
                <Default {...props} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
