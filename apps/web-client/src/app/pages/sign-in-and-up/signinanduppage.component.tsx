import React from "react";

import './signinanduppage.styles.scss';

import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <div>Sign Up</div>
    </div>
);

export default SignInAndUpPage;