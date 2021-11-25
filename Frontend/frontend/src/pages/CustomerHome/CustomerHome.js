import React from 'react'
import './CustomerHome.css';
import { Link } from 'react-router-dom';

function CustomerHome() {
    return (
        <div className="customerHomepage">
            <div className="HeadText">Post</div>

        <div className="container post">
            <div className="card" >
                <div class="card-body">
                    <h3 className="post-title">Work titile</h3>
                    <h6 className="post">Category: Painting</h6>
                    <h6 className="post">No. of workers needed: 3</h6>
                    <p className="post-text">This is a sample description about the work to be completed</p>
                    <button type="button" className="btn btn-warning">Completed</button>
                </div>
            </div>
            <div className="card" >
                <div class="card-body">
                    <h3 className="post-title">Work Title</h3>
                    <h6 className="post">Category: Plumbing</h6>
                    <h6 className="post">No. of workers needed: 2</h6>
                    <p className="post-text">This is a sample description about the work to be completed.</p>
                    <button type="button" className="btn btn-warning">Completed</button>
                </div>
            </div>
        </div>
        <div className="createBtn">
            
            <Link to="createpost"> <button type="button" class="btn ">+</button> </Link>
        </div>
        </div>
    )
} 

export default CustomerHome
