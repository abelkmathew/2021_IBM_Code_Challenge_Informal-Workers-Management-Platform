import React from 'react'
import './CustomerHome.css';
import { Link } from 'react-router-dom';
import Post from '../../components/Post/Post'

function CustomerHome() {
    return (
        <div className="customerHomepage">
            <div className="HeadText">Post</div>

        <Post page={"customer"}/>
        <Post page={"customer"}/>

        
        <div className="createBtn">
            
            <Link to="createpost"> <button type="button" class="btn ">+</button> </Link>
        </div>
        </div>
    )
} 

export default CustomerHome
