import React, { useState } from "react";
import styles from "./App.module.css";
import "./components/Board/Board.module.css";
import "./components/Square/Square.module.css";
import Board from "./components/Board/Board";

const App = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [active, setActive] = useState(-1);
  const [isDesc, setIsDesc] = useState(false);

  const winner = calculateWinner(history[stepNumber].squares);
  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #${move} at ${history[move].location}`
      : `Go to game start`;
    return (
      <li key={move}>
        <button className={styles.btn} onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  const handleClick = (i) => {
    const locations = [
      [1, 1],
      [2, 1],
      [3, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [1, 3],
      [2, 3],
      [3, 3],
    ];
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current.squares];

    if (winner || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, { squares, location: locations[i] }]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
    setActive(i);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
    setActive(-1);
  };

  const sortMove = () => {
    setIsDesc(!isDesc);
  }

  let status;
  if (winner) {
    status = "Winner: " + winner.player;
  } else if (!history[stepNumber].squares.includes(null)) {
    status = "Draw";
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3>
          {status}
        </h3>
        <Board
          squares={history[stepNumber].squares}
          onClick={handleClick}
          active={active}
          line={winner ? winner.line : []}
        />
      </div>
      <ol>{isDesc ? moves: moves.reverse()}</ol>
      <button className={styles.btn} onClick={sortMove}>Sort</button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

export default App;
