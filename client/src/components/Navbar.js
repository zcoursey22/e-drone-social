import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div id="logo">
        <a href="#">flyConnect</a>
      </div>
      <div id="links">
        <a className="link" href="#">Profile</a>
        <a className="link" href="#">Friends</a>
        <a className="link" href="#">Messages</a>
        <a className="link" href="#">Log Out</a>
      </div>
    </div>
  );
};

export default Navbar;
