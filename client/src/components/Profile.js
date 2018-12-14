import React from 'react';

import Navbar from './Navbar.js';

const Profile = (props) => {
  const { username } = props.auth.user;
  return (
    <div className="Main">
      <Navbar auth={ props.auth }></Navbar>
      <h1>{username}</h1>
    </div>
  );
};

export default Profile;
