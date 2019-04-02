import React from 'react';
import styles from './col.module.css';
const Col = ({ size }) => {
    return(
        <div className={styles.col} style={{width: `${8.33*size.size}%`}}>
        {size.children}
        </div>
    )
}

export default Col;