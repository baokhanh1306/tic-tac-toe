import React, { useState } from "react";
import Board from "./components/Board/Board";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "0";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  const handleRetry = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
  }
  return (
    <div className="main">
      <h3>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</h3>
      <Board squares={board} onClick={handleClick} />
      <button className="retry-btn" onClick={handleRetry}>
        Retry
      </button>
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
			return squares[a];
		}
	}
	return null;
}


export default App;
