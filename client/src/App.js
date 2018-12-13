import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './components/Main.js';
import Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
