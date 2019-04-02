import React from 'react';
import PropTypes from 'prop-types';
import styles from './dataPicker.module.css';

var test = function(e, onDatePick){
    var slice = e.split("-")
    var tmp = slice.shift();
    var retVal = slice.concat(tmp);
    var retString = retVal.join("-");
    onDatePick(retString)
}
const DatePicker = ({onDatePick}) =>{
    return(
        <div>
            <label for="dateofbirth">Pick A Date</label>
            <input type='date' id="datePickerID" onChange={event => test(event.target.value, onDatePick)}></input>
        </div>
    )
}

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
}

export default DatePicker;