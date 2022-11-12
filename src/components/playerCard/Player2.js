import React from "react";
import "./PlayerCard.css";
import CurrentScore from "./CurrentScore";
function PlayerCard2({ playerName, cardColor, currentScore, currentPlayer,accumulator}) {

  return (
    <div  className={`flex-column playerCard ${cardColor}`}>
      <div className="playerHeader">
        <h1 className="playerTitle">{playerName}</h1>
        <span className="scoreDisplay">{currentScore.bank2}</span>
      </div>
      <CurrentScore currentScore={currentScore.player2} />
    </div>
  );
}

export default PlayerCard2;
