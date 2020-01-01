import React, { Component } from 'react';
import FormInput from '../form-input';
import Button from '../button';

import { auth, createUserProfileDocument } from '../../firebase/utils';

import './styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('password do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        email: '',
        password: '',
        displayName: '',
        confirmPassword: '',
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
    const { displayName, email, password, confirmPassword } = this.state;
  
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" />
          <FormInput type="text" name="email" value={email} onChange={this.handleChange} label="Email" />
          <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" />
          <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" />

          <Button type="submit"> Sing up </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
