import React from "react";
import "./App.css";
import Overlay from "./LandingPage/Overlay";
import Player1 from "./playerCard/Player1";
import Player2 from "./playerCard/Player2";
import CenterInterAction, {
  diceArr,
} from "./CenterInterAction/CenterInterAction";

function App() {
  const [currentPlayer, setCurrentPlayer] = React.useState("player1");
  const [accumulator, setAccumulator] = React.useState(0)
  const [p1ColorClass, setp1Class] = React.useState('active')
  const [p2ColorClass, setp2Class] = React.useState('default')
  const [dice, setDice] = React.useState([0,0]);
  const [target, setTarget] = React.useState('')
  const [currentScore, setCurrentScore] = React.useState({
    player1: 0,
    bank1:0,
    player2: 0,
    bank2:0,
  });

  console.log(target);

  function NewGame (){
    setCurrentScore((prev)=> ({
      player1: 0,
      bank1:0,
      player2: 0,
      bank2:0,
    }))
    setCurrentPlayer('player1')
    setp1Class('active')
    setp2Class('default')
  }


  function HoldOrSwitch() {
    if (currentPlayer === "player1") {
      setp1Class((prev)=>prev='default')
      setp2Class((prev)=>prev='active')
      setCurrentPlayer((prev) => (prev = "player2"));
      setCurrentScore((prev)=>({...prev,bank1:prev.bank1+prev.player1,player1:0}))
    } else {
      setp1Class((prev)=>prev='active')
      setp2Class((prev)=>prev='default')
      setCurrentPlayer((prev) => (prev = "player1"))};
      setCurrentScore((prev)=>({...prev,bank2:prev.bank2+prev.player2,player2:0}))
      checkForWin()
  }

  function checkForWin(){
    if(currentScore.bank1===target){
      console.warn('GAME OVER');
    }
  }

  return (
    <div className="App">
      <Overlay setTarget={setTarget}></Overlay>
      <div className="center-flex main-layout">
        <CenterInterAction
        NewGame={NewGame}
          HoldOrSwitch={HoldOrSwitch}
          currentPlayer={currentPlayer}
          dice={dice}
          setDice={setDice}
          setCurrentPlayer={setCurrentPlayer}
          setCurrentScore={setCurrentScore}
          accumulator={accumulator}
          setAccumulator={setAccumulator}
        />
        <Player1
          diceArr={diceArr}
          currentPlayer={currentPlayer}
          setCurrentScore={setCurrentScore}
          currentScore={currentScore}
          playerName={"PLAYER 1"}
          cardColor={p1ColorClass}
          accumulator={accumulator}
          />
        <Player2
        diceArr={diceArr}
        currentPlayer={currentPlayer}
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        playerName={"PLAYER 2"}
        cardColor={p2ColorClass}
        accumulator={accumulator}
        />
      </div>
    </div>
  );
}

export default App;
