import React from 'react'
import './customersignup.css';

function CustomerSignUp() {
    return (
        <div className="customerSignup">
            <div className="container form">
                    <div className="headText">Customer Sign Up</div>
                    <div class="inputField">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name"></input>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"></input>
                    <input type="text" class="form-control em" id="exampleFormControlInput1" placeholder="Location"></input>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
                    <div className="pwd"><input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
                    </div>
                    </div>
                    <button type="button" class="btn ">Sign Up</button>
                </div>
        </div>
    )
}

export default CustomerSignUp
