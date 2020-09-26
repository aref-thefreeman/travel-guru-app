
import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import './Book.css'
import DateFnsUtils from '@date-io/date-fns';
import KeyboardDatePickerExample from '../KeyboardDatePicker/KeyboardDatePicker';
const Book = () => {
    return (
        <div className = "date-picker">
            <p>Book works now</p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* <BasicDatePicker></BasicDatePicker> */}
            <KeyboardDatePickerExample></KeyboardDatePickerExample>
            {/* <KeyboardDatePickerExample></KeyboardDatePickerExample> */}

             </MuiPickersUtilsProvider>
            
        </div>
    );
};

export default Book;