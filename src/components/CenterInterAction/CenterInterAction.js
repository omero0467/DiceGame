import React from "react";
import "./CenterInterAction.css";
import image1 from "./diceImages/1.png";
import image2 from "./diceImages/2.png";
import image3 from "./diceImages/3.png";
import image4 from "./diceImages/4.png";
import image5 from "./diceImages/5.png";
import image6 from "./diceImages/6.png";

export const diceArr = [
  {
    dice_number: 1,
    source: image1,
  },
  {
    dice_number: 2,
    source: image2,
  },
  {
    dice_number: 3,
    source: image3,
  },
  {
    dice_number: 4,
    source: image4,
  },
  {
    dice_number: 5,
    source: image5,
  },
  {
    dice_number: 6,
    source: image6,
  },
];
function randomIze() {
  return Math.floor(Math.random() * 6);
}

//every time theres a hold event:
// adds to bank
//! bank doesnt reset
//restes sub accumelator restes

function addition(dicePool, randomDicePicker) {
  return (
    dicePool[randomDicePicker[0]].dice_number +
    dicePool[randomDicePicker[1]].dice_number
  );
}

function RollDice(
  currentPlayer,
  setCurrentScore,
  setDice,
  dice,
  HoldOrSwitch,
  setAccumulator,
  accumulator,

) {

  if (currentPlayer === "player1" && dice[0] + dice[1] !== 0) {
    setAccumulator((prev) => (prev = addition(diceArr, dice)));
    setCurrentScore((prev) => ({
      ...prev,
      player1: prev.player1 + accumulator,
    }));
  } else if (currentPlayer === "player2") {
    setAccumulator((prev) => (prev = addition(diceArr, dice)));
    setCurrentScore((prev) => ({
      ...prev,
      player2: prev.player2 + accumulator,
    }));
  }
  setDice((prev) => {
    console.log(prev);
    return (prev = [randomIze(), randomIze()]);
  });

  if (dice[0] === 5 && dice[1] === 5) {
    HoldOrSwitch();
  }

}

function CenterInterAction({
  HoldOrSwitch,
  currentPlayer,
  setCurrentScore,
  setCurrentPlayer,
  dice,
  setDice,
  NewGame,
  accumulator,
  setAccumulator,
}) {
  return (
    <div className="flex-column CenterInterAction">
      <div
        className="NewGameBtn btn"
        onClick={() => {
          NewGame();
          setAccumulator((prev) => (prev = 0));
        }}
      >
        ♽ NEW GAME
      </div>
      <img className="diceImg" src={diceArr[dice[0]].source} alt="dice" />
      <img className="diceImg" src={diceArr[dice[1]].source} alt="dice" />
      <div
        className="RollDice btn"
        onClick={() =>
          RollDice(
            currentPlayer,
            setCurrentScore,
            setDice,
            dice,
            HoldOrSwitch,
            setAccumulator,
            accumulator,
          )
        }
      >
        🎲 ROLL DICE
      </div>
      <div
        className="HoldBtn btn"
        onClick={() => {
          HoldOrSwitch();
        }}
      >
        📌 HOLD
      </div>
    </div>
  );
}

export default CenterInterAction;
