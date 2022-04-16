import React, { FC } from "react"

import './custom-button.styles.scss';

const CustomButton: FC<any> = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;