import React from "react";
import Square from "../Square/Square";
import styles from "./Board.module.css";

const Board = ({ squares, onClick, active, line }) => {
  return (
    <div className={styles.container}>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          active={active === i}
          winning={line.includes(i)}
        />
      ))}
    </div>
  );
};

export default Board;
