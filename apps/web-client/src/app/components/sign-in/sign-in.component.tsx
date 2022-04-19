/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/user/auth/auth.slice';

interface SignInData {
  email?: string | undefined;
  password?: string | undefined;
}

export const SignIn: FC = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    password: '',
  };

  const [signInData, setSignInData] = useState<SignInData>(initialState);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await dispatch(login({ ...signInData, logInType: 'email' }));
      setSignInData(initialState);
    
    } catch (error) {
      console.error('unable to athenticate user', error);
    }
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    console.log(event)
    
    await setSignInData({...signInData, [name]: value});
    console.log(signInData)
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={signInData?.email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={signInData?.password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={() => dispatch(login({logInType: 'google'}))} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
