import React from 'react';
import PropTypes from 'prop-types';
import styles from './row.module.css';
import Col from '../Col/Col'

const Row = ({ children }) => {
    return(
        <div className={styles.row}>
            {children.map(x=> <Col size={x.props}></Col>)}
            {console.log(children)}
        </div>
    )
}
/*
Row.propTypes = {
    childern: PropTypes.instanceOf(Col).isRequired
}
*/
export default Row;