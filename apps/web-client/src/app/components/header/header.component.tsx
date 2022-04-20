import React, { FC } from "react";
import { Link } from "react-router-dom";

import './header.styles.scss';
import {ReactComponent as Logo} from '../../../assets/crown.svg';
import { AppUser } from "../../app";
import { useDispatch, useSelector } from "react-redux";
import { displayNameSelector, isUserAuthenticatedSelector } from "../../store/slices/user/auth/auth.selectors";
import { logout } from "../../store/slices/user/auth/auth.slice";
import CartIcon from "../cart/cart-icon/cart-icon";

const Header: FC<AppUser> = () => {

    const authenticated = useSelector(isUserAuthenticatedSelector);
    const displayName = useSelector(displayNameSelector)
    const dispatch = useDispatch();
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    authenticated ?
                    <div className="option" onClick={() => dispatch(logout())}> {displayName} SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
        </div>
    )
}

    

export default Header;