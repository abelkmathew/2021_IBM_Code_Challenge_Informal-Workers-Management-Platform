import React from 'react'
import './CreatePost.css';

function CreatPost() {
    return (
        <div className="createPost">
            <div className="HeadText">Create Post</div>
            <div className="container">
        
              <div className="col-md-12">
                <br/>
                <input type="text" className="form-control" placeholder="Work Title" /><br/>
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control"  placeholder="Category"/><br/>
              </div>
              <div className="col-md-12">
                <input type="number" className="form-control"  placeholder="Number of workers needed"/><br/>
              </div>
              <div className="col--md-12">
               <textarea className="form-control" rows="5" id="" placeholder="Type the work description"></textarea> <br/>
              </div>
              <div className="col-md-12 button">
               <button type="submit" className="btn btn-danger">Send Message</button>   
              </div>
              </div>

        </div>
    )
}

export default CreatPost
