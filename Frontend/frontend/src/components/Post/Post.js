import React,{ useState} from 'react'
import './post.css';

function Post() {

    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="post">
            <div className="detailsBox">
                <p id="title">Title:</p>
                <p id="location">Location:</p>
                <p id="persons">No. of Persons:</p>
            </div>
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
            
        </div>
    )
}

export default Post
