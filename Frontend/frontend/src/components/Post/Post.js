import React,{ useState} from 'react'
import './post.css';
import phone from './phone-call.png'

function Post({page}) {

    const [dropdown, setDropdown] = useState(false);
    console.log(page);

    return (
        <div className="post">
            <div className="detailsBox">
                <p id="title">Title:</p>
                <p id="category">Category:</p>
                <p id="persons">No. of Persons:</p>
            </div>
            <p className="head">Description</p>
            {dropdown ? 
                
                <div className="dropdown">
            
                    <p id="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className="btn btn-success" onClick={()=> setDropdown(!dropdown)} id="viewless">View Less</button>
                </div>
                
                : 
                <div className="dropdown">
                <button className="btn btn-success" onClick={()=> setDropdown(!dropdown)} id="moredetails">More details</button>
                </div> 
            }
            {page === "customer" 
            ?
            <div className="customerpost">
                <div className="status">Status:</div><br />
                <button className="btn btn-warning">Completed</button>
            </div>
            :
            <div className="workerpost">
                <p id="location">Location:</p>
                <div className="phoneApplyWrapper ">
                    <div className="applybtn"><button className="btn btn-danger">Apply Now</button></div>
                    <div className="  phoneicon"><img className="img-fluid" src={phone} alt="phone-icon"></img></div>
                </div>
            </div>
            }
            
            
        </div>
    )
}

export default Post
