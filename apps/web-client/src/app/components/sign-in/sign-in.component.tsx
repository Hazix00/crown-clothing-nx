import { signInWithGoogle } from "../../../firebase/firebase.utils";
import React, { ChangeEvent } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

interface UserAuth {
  email: string;
  password: string;
}

export class SignIn extends React.Component<IProps, UserAuth> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event: ChangeEvent) => {
    const { value, name } = event.target as any;

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
