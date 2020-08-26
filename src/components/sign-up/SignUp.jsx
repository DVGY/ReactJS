import React, { Component } from 'react';
import {
  auth,
  createUserProfileDoc,
} from '../../components/firebase/firebaseUtility';
import FormInput from '../form/FormInput';
import Button from '../button/Button';
import './sign-up.scss';
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, displayName, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('password does not match');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDoc(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password, displayName, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">Create your account</h1>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Enter Email"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Enter Password"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          ></FormInput>
          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    );
  }
}
