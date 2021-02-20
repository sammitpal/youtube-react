import React from 'react'
import './Player.css'
import { useStateValue } from './StateProvider'
import YouTube from 'react-youtube-embed'
function Player() {
    const [{id}] = useStateValue();
    return (
        <div className="player">
            <YouTube id = {id}/>
        </div>
    )
}

export default Player
