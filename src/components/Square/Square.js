import React from 'react';
import styles from './Square.module.css';
import cx from 'clsx';



const Square = ({ value, onClick, active, winning }) => {
    const classes = cx(styles.btn, {
        [styles.active]: active,
        [styles.winning]: winning
    });
    return (
        <button className={classes} onClick={onClick}>
            {value}
        </button>
    )
};

export default Square;
