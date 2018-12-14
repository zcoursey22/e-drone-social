import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Main from './components/Main.js';
import Login from './components/Login.js';
import Profile from './components/Profile.js';


const defaultUser = {
  id: '',
  username: '',
  email: '',
}

const auth = {
  user: localStorage.user !== undefined ? JSON.parse(localStorage.user) : defaultUser,
  isAuthenticated: localStorage.token !== undefined,
  authenticate(cb) {
    this.user = JSON.parse(localStorage.user);
    this.isAuthenticated = true;
    setTimeout(cb, 0);
  },
  signOut(cb) {
    this.user = undefined;
    this.isAuthenticated = false;
    localStorage.clear();
    setTimeout(cb, 0);
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} auth={auth} />
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
          <Route exact path="/" render={(props) => <Main {...props} auth={auth} /> } />
          <Route path="/login" render={(props) => <Login {...props} auth={auth} /> } />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
