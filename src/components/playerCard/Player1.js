import React from "react";
import "./PlayerCard.css";
import CurrentScore from "./CurrentScore";
function PlayerCard1({
    playerName,cardColor,currentScore,currentPlayer
}) {
    
    return (
        <div  className={`flex-column playerCard ${cardColor}`}>
        <div className="playerHeader">
        <h1 className="playerTitle">{playerName}</h1>
        <span className="scoreDisplay">{currentScore.bank1}</span>
      </div>
      <CurrentScore currentScore={currentScore.player1} />
    </div>
  );
}
 

export default PlayerCard1;
