import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import styled from 'styled-components';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      username: '',
      password: '',
      usernameValid: false,
      passwordValid: false
    }
  }

  logIn() {
    this.props.fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  }

  render() {
    if (this.state.redirectToReferrer) {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      return (
        <Redirect to={ from }/>
      )
    }

    const Username = styled.input`

    `;

    const Password = styled.input`

    `;

    return (
      <div className="Login">
        <div id="logo">
          <NavLink to="/">flyConnect</NavLink>
        </div>

        <div id="modal">
          <h2 id="title">Log In to Your Account</h2>

          <div id="main-login">
            <Username placeholder="email or username"></Username>
            <Password placeholder="password"></Password>
            <span id="forgot-password">Forgot password?</span>
            <button onClick={ this.logIn.bind(this) }>Log In</button>
          </div>

          <div id="sign-up">
            <span>Need an account?</span>
            <span id="sign-up-text">Sign up</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
