import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import Options from "./components/Options"
import Notification from "./components/Notifications";
import "./app.css"


function App() {
  return (

    <div className='wrapper'>
      <h1 className='appbar'>Video Call</h1>
        <VideoPlayer />
        <Options>
          <Notification />
        </Options>
      
      
    </div>
  )
}

export default App