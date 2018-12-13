import React from 'react';

import Navbar from './Navbar.js';

const Profile = (props) => {
  return (
    <div className="Main">
      <Navbar fakeAuth={ props.fakeAuth }></Navbar>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
