import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';

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
    const {username, password} = this.state;
    axios.post('/api/login', {username , password})
      .then(res => {
        if (typeof res.data.token !== 'undefined') {

          localStorage.setItem('user', JSON.stringify(res.data.user));
          localStorage.setItem('token', res.data.token);

          console.log('localStorage user:', JSON.parse(localStorage.getItem('user')));
          console.log('localStorage token:', localStorage.getItem('token'));

          this.props.auth.authenticate(() => {
            this.setState({
              redirectToReferrer: true
            });
          });
        } else {
          alert('Invalid login credentials!');
        }
      })
      .catch(err => err);
  }

  render() {
    if (this.state.redirectToReferrer) {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      return (
        <Redirect to={ from }/>
      )
    }

    return (
      <div className="Login">
        <div id="logo">
          <NavLink to="/">flyConnect</NavLink>
        </div>

        <div id="modal">
          <h2 id="title">Log In to Your Account</h2>

          <div id="main-login">
            <input onChange={e => this.setState({ username: e.target.value })} placeholder="email or username"></input>
            <input onChange={ (e) => this.setState({ password: e.target.value }) } placeholder="password"></input>
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
