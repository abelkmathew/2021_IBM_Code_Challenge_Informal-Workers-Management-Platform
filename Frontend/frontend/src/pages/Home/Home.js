import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import image from '../logo.png'

function Home() {
    return (
        <div className="homePage">
            <div className="homePageWrapper">
                <div className="logo-name">
                    <div className="logo"><img className="img-fluid" src={image} alt="Logo"></img></div>
                    <div className="companyname">jobit</div>
                </div>
                <div className="buttons">
                    <Link to="login"><button type="button" className="btn">LOG IN</button></Link>
                    <Link to="signup"><button  type="button" className="btn">SIGN UP</button></Link>
                </div>
            </div>
        </div>

    )
}

export default Home
