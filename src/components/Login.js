import React from 'react';

export const Login = (props) => {
    return (
        <div className={`login ${props.visible}`}>
             <form>
                <p className="login__heading">LOGIN</p>
                <label className="login__texts">Email</label>
                <input className="login__inputs login__texts" type="text" />
                <label className="login__texts">Password</label>
                <input className="login__inputs login__texts" type="text"/>
                <input className="login__inputs login__texts login__button" type="submit" value="LOGIN"/>
            </form>
            <p className="login__texts">No account yet? <a className="login__link" href="#">REGISTER HERE</a></p>
        </div>
    )
}
export default Login;
