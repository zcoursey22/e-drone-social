import React from 'react';

import Navbar from './Navbar.js';

const Main = (props) => {
  return (
    <div className="Main">
      <Navbar fakeAuth={ props.fakeAuth }></Navbar>
      <h1>Main</h1>
    </div>
  );
};

export default Main;
