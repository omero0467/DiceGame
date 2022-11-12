import React from 'react'

function List() {
  return (
    <ul className='Rules List'>
        <li>In your turn - roll the dice lat least once and accumulate the result in "current"</li>
        <li>You can roll again or click "Hold" to save the points from "Current" and end the turn.</li>
        <li>Notel If you get 6-6 - you will lose all points from "current" and the turn will go to your opponent.</li>
        <li>If you managed to reach exactly the target score - you win! if you passed it you loose</li>
    </ul>
  )
}


export default List