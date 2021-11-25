import React, { setState, useState } from 'react'
import './workerhome.css';
import Post from '../../components/Post/Post'

function WorkerHome() {


    return (
        <div className="workerhome">
            <div className="HeadText">
                Job Lists
            </div>
            <Post page={"worker"}/>
            <Post page={"worker"}/>
        </div>
    )
}

export default WorkerHome
