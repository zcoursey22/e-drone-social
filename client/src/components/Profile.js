import React from 'react';

import Navbar from './Navbar.js';

const Profile = (props) => {
  return (
    <div className="Main">
      <Navbar auth={ props.auth }></Navbar>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
