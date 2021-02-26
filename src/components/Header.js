import React, { useState, Component } from 'react';
import logo from '../images/logo.png'

    const Header = ({onLoginClick}) => {
        const [login, setLogin] = useState(false);
        const toggleLink = () => {
            onLoginClick();
            setLogin(!login);
        }
        return (
            <header className="container">
                <div className="header__container">
                    <div className="header__content"><img src={logo} alt="Logo" /></div>
                    <div className="header__content"><button className="header__text" onClick={toggleLink}>{!login ? 'LOGIN' : 'CLOSE' }</button></div>
                </div>
            </header>
        )
    }
    

export default Header;