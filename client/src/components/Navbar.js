import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Navbar = withRouter((props) => {
  const signOut = () => {
    props.fakeAuth.signOut(() => {
      props.history.push('/');
    });
  };

  let links = null;
  if (props.fakeAuth.isAuthenticated) {
    links = (
      <div id="links">
        <NavLink className="link" to="/profile">Profile</NavLink>
        <button className="link" onClick={signOut}>Log Out</button>
      </div>
    );
  } else {
    links = (
      <div id="links">
        {/* <NavLink className="link" to="/profile">Profile</NavLink> */}
        <NavLink className="link" to="/login">Log In</NavLink>
      </div>
    );
  }

  return (
    <div className="Navbar">
      <div id="logo">
        <NavLink to="/">flyConnect</NavLink>
      </div>
      { links }
    </div>
  );
});

export default Navbar;
