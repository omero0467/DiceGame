import React from 'react'
import './Overlay.css'
import List from './List'
import UserInterAction from './UserInterAction'


function Overlay({getRef,target,setTarget}) {
    const overlayRef = React.useRef('')
  return (
    <div
        ref={getRef(overlayRef)} className='overlay'>
        <h1>Game Instructions</h1>
        <List></List>
        <UserInterAction setTarget={setTarget} target={target} overlayRef={overlayRef}/>
    </div>
  )
}

export default Overlay