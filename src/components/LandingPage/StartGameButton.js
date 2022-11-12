import React from 'react'

function clickHandle(ref,InputRef,setTarget) {
  console.log(InputRef);
  if(!InputRef.current.value){
    InputRef.current.placeholder='Must Insert target Value!'
  }else{
    setTarget(InputRef.current.value)
    ref.current.classList.add('nonVisible');
    }
    
}
function StartGameButton({InputRef,setTarget,overlayRef}) {
  return (
    <div onClick={()=>clickHandle(overlayRef,InputRef,setTarget)} className='startbtn btn'>
        START GAME
    </div>
  )
}
 
export default StartGameButton  