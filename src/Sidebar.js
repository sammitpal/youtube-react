import { Home, ThumbUp, VideoLibrary, Whatshot, History } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_options">
                <Home/>
                <h3>Home</h3>
            </div>
            <div className="sidebar_options">
                <Whatshot/>
                <h3>Trending</h3>
            </div>
            <div className="sidebar_options">
                <VideoLibrary/>
                <h3>Subscriptions</h3>
            </div>
            <div className="sidebar_options">
                <History/>
                <h3>History</h3>
            </div>
            <div className="sidebar_options">
                <ThumbUp/>
                <h3>Liked Videos</h3>
            </div>
        </div>
    )
}

export default Sidebar
