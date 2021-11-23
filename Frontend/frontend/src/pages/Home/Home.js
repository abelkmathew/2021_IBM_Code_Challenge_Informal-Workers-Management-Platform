import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homePage">
            <div className="homePageWrapper">
                <div className="buttons">
                    <Link to="login"><button>LOG IN</button></Link>
                    <Link to="signup"><button>SIGN UP</button></Link>
                </div>
            </div>
        </div>

    )
}

export default Home
