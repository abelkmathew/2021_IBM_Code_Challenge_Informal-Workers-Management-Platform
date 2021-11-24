import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import image from '../logo.png'

function Login() {
    return (
        <div className="loginPage">
            <div className="loginPageWrapper">
            <div className="logo"><img className="img-fluid" src={image} alt="Logo"></img></div>
                <div className="form">
                    <div className="headText">Login Now !</div>
                    <input type="email" class="form-control em" id="exampleFormControlInput1" placeholder="Email"></input>
                    <div className="pwd"><input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
                    </div>
                    <div className="forgotPWD"><a href="#">Forgot password ?</a></div>
                    <button type="button" class="btn ">Login</button>
                    <div className="signUp">
                        Don't have an account?
                        <Link to="signUp"> Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
