
import React, { useContext } from 'react'
import { useState } from 'react';
import { SocketContext } from '../SocketContext'
import "./Options.css"

function Options({children}) {
  const {me,callAccepted, name, setName,callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('')
  const [displayId ,setDisplayId ] =useState(false);

  return (
    <div className='Option_container'>
          <div className='info_Container'>

            <div className='padding'>
              <div className='padding_tittle'>
                <h3>Account Info</h3>
              </div>
              <div className='padding_content'>
                <label htmlFor="name">Name</label>
                <input id='name' className='myInput' value={name} onChange={e => setName(e.target.value)} placeholder='Enter name'/>
                <button onClick={prevDisplayId => setDisplayId(prevDisplayId)}>Display the Id</button>
                <h3>{displayId ? me : null}</h3>
              </div>
              
            </div>

            <div className='padding'>
              <div className='padding_tittle'>
                <h3>Make a call</h3>
              </div>
              <label htmlFor="myInput">Call</label>
              <input id='myInput' className='myInput' value={idToCall} onChange={e => setIdToCall(e.target.value)} placeholder='Enter id to call'/>
              {callAccepted  && !callEnded ? (
                <button onClick={leaveCall} className='margin'>
                  Hang Up
                </button>
              ) : (
                <button onClick={() => callUser(idToCall)} className='margin'>
                  Call
                </button>     
              )}
            </div>

          </div>
      
          {children}
        
    </div>
  )
}

export default Options