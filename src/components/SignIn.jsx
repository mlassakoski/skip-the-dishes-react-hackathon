import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import '../css/SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  signIn() {
    const { email } = this.state;
    localStorage.setItem('user', JSON.stringify({ email }));
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={event => this.setState({ password: event.target.value })}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            onClick={() => this.signIn()}
          > Login</Button>
          <div>staet{this.state.error}</div>
          <div><Link to={'/signup'}>Sign up instead</Link></div>
        </form>
      </div>
    )
  }
}

export default SignIn;
