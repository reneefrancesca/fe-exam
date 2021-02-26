import React from 'react'

const Register = () => {
    return (
        <div className="register">
             <form>
                <p className="register__heading">REGISTER</p>
                <label className="register__texts">Email</label>
                <input className="register__inputs register__texts" type="text" />
                <label className="register__texts">Password</label>
                <input className="register__inputs register__texts" type="text"/>
                <label className="register__texts">Confirm Password</label>
                <input className="register__inputs register__texts" type="text"/>
                <input className="register__inputs register__texts register__button" type="submit" value="REGISTER"/>
            </form>
            <p className="register__texts">Already have an account? <a className="register__link" href="#">LOGIN HERE</a></p>
        </div>
    )
}

export default Register;
