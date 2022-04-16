import React from "react";

import './signinanduppage.styles.scss';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndUpPage;