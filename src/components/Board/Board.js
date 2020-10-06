import React from 'react'
import Square from '../Square/Square';
import styles from './Board.module.css';

const Board = ({ squares, onClick }) => {
    return (
        <div className={styles.container}>
            {squares.map((square,i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Board;
