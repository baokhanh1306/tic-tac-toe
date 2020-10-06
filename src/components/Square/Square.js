import React from 'react';
import styles from './Square.module.css';


const Square = ({ value, onClick }) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {value}
        </button>
    )
};

export default Square;
