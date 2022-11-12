import React from 'react'
import './WinMessage.css'
import stars from './gifs/stars.gif'
function WinMessage({winner,NewGame,winScreen}) {
  return (
    <div className={`winmessage message center-flex ${winner[1]}`}>
        <div className="Manystars">
        <div className='winner'> 
        <p className='winner-text'>{winner[0]} IS THE WINNER</p>
        <div className="btn restart" onClick={()=>{NewGame();winScreen((prev)=>!prev)}}>RESTART</div>
        </div>
            <img className='stars wingif' src={stars} alt="gif" />
            <img className='stars wingif' src={stars} alt="gif" />
            <img className='stars wingif' src={stars} alt="gif" />
        </div>
    </div>
  )
}

export default WinMessage