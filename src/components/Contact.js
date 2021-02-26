import React from 'react';
import logo from '../images/contact-logo.png';

const contact = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__container">
                    <div className="contact__section">
                        <img src={logo} alt="Logo"/>
                        <p className="contact__texts">
                            サンプルテキストサンプル ルテキストサンプルテキストサ
                            ンプルテキストサンプル ルテキスト
                        </p>
                    </div>
                    <div className="contact__section">
                        <button className="contact__back-to-top" onClick={handleClick}>TOP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;