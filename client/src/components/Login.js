import React from 'react';

const Login = () => {
  return (
    <div className="Login">
      <div id="logo">
        <span>flyConnect</span>
      </div>

      <div id="modal">
        <h2 id="title">Log In to Your Account</h2>

        <div id="main-login">
          <input placeholder="email or username"></input>
          <input placeholder="password"></input>
          <span id="forgot-password">Forgot password?</span>
          <button>Log In</button>
        </div>

        <div id="sign-up">
          <span>Need an account?</span>
          <span id="sign-up-text">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
