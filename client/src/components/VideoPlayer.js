import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'
import "./VideoPlayer.css"


function VideoPlayer() {
  const { name, callAccepted,myVideo, userVideo,callEnded, stream, call }= useContext(SocketContext);
  return (

        <div className='gridContainer'>
          {/* our video */}
          {stream && (
            <div className="paper">
              <h5>{name || 'Name'}</h5>
              <video playsInline muted ref={myVideo} autoPlay className='video' />
            </div>
          )}
          
          {/* users   video */}
          {callAccepted && !callEnded && (
            <div className="paper">
              <h5>{call.name || 'Name'}</h5>
              <video playsInline ref={userVideo} autoPlay className= 'video' />
            </div>  
          )}
          

        </div>

  )
}

export default VideoPlayer