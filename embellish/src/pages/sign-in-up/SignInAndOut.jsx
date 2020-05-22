import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './sing-in-up.scss';
const SignInAndOut = () => {
  return (
    <div className="sign-in-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndOut;
