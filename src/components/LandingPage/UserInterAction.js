import React from 'react'
import StartGameButton from './StartGameButton'

function UserInterAction({overlayRef,setTarget}) {

  const InputRef = React.useRef('')
  return (
    <div className='flex-column userLandig'>
        <h2>Please select a target score</h2>
        <input type="number" ref={InputRef}/>
        <StartGameButton setTarget={setTarget} overlayRef={overlayRef} InputRef={InputRef}/>
    </div>
  )
}

export default UserInterAction