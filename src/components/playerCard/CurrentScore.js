import React from 'react'

function CurrentScore({currentScore,setCurrentScore}) {
  return (
    <div className='playerFooter'>
        <span>CURRENT</span>
        <br/>
        <br />
        <div className="score">{currentScore}</div>
    </div>
  )
}

export default CurrentScore