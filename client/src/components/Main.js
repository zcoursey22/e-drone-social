import React from 'react';

import Navbar from './Navbar.js';

const Main = (props) => {
  return (
    <div className="Main">
      <Navbar auth={ props.auth }></Navbar>
      <h1>Main</h1>
    </div>
  );
};

export default Main;
