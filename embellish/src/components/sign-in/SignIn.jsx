import React, { Component } from 'react';
import FormInput from '../../components/form/FormInput';
import Button from '../button/Button';
import './sign-in.scss';
import { signInWithGoogle, auth } from '../firebase/firebaseUtility';
export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have already an account</h2>
        <span className="title">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={signInWithGoogle} isGoogleSingIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
