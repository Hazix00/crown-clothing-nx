/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";
import React, { ChangeEvent, FormEvent } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

interface UserAuth {
  email: string;
  password: string;
}

export class SignIn extends React.Component<any, UserAuth> {
  constructor(props: any) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = this.state

    try { 
      await signInWithEmailAndPassword(auth, email, password )
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error('unable to athenticate user', error)
    }

  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;

    this.setState({ [name]: value } as any);
  };
  override render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
