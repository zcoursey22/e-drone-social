import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Main from './components/Main.js';
import Login from './components/Login.js';
import Profile from './components/Profile.js';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} fakeAuth={fakeAuth} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )}/>
);

class App extends Component {
  componentDidMount() {
    axios.get('/api')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Main {...props} fakeAuth={fakeAuth} /> } />
          <Route path="/login" render={(props) => <Login {...props} fakeAuth={fakeAuth} /> } />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
