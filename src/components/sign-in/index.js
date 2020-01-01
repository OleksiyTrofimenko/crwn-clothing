import React, { Component } from 'react';
import FormInput from '../form-input';
import Button from '../button';

import { signInWithGoogle, auth } from '../../firebase/utils';

import './styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
      });

    } catch(error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={email} required handleChange={this.handleChange} label="Email" />
          <FormInput name="password" type="password" value={password} required handleChange={this.handleChange} label="Password" />

          <div className="buttons">
            <Button type="submit">
              Sign in
            </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
