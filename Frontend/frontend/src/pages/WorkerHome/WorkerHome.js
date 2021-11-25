import React from 'react'
import './workerhome.css';
import Post from '../../components/Post/Post'

function WorkerHome() {
    return (
        <div className="workerhome">
            <div className="HeadText">
                Job Lists
            </div>
            <Post />
            <Post />
        </div>
    )
}

export default WorkerHome
