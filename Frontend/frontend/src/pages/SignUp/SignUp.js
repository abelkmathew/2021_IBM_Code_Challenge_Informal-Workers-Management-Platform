import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import image from '../logo.png'

function SignUp() {
    return (
        <div className="signuppage">
            <div className="signuppagewrapper">
            <div className="logo"><img className="img-fluid" src={image} alt="Logo"></img></div>
                <p> Are you ...</p>
                <div className="buttons">
                    <Link to="worksignup"><button>LOOKING FOR A JOB</button></Link>
                    <Link to="custsignup"><button>LOOKING FOR SERVICES</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
