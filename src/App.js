import "../src/Scss_Files/app.css";
import calculateWinner from "./component/calculatWinner/calculateWinner.component";
import Status from "./component/status/status.component";
import GameBoard from "./component/gameboard/gameboard.component";
import MoveList from "./component/movelist/movelist.component";
import { useState } from "react";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const winner = calculateWinner(currentSquares);

  return (
    <div className="game">
      <div className="fixed">
        <Status winner={winner} xIsNext={xIsNext} />
        <GameBoard
          squares={currentSquares}
          xIsNext={xIsNext}
          handlePlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <MoveList history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
};

export default App;
