import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
