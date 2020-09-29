
//Imports for state management and dynamic routing
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import hotelDetails from '../../FakeData/FakeData'

//Imports for Form designing
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import './Book.css'
import DateFnsUtils from '@date-io/date-fns';
import KeyboardDatePickerExample from '../KeyboardDatePicker/KeyboardDatePicker';


const Book = () => {

     const {destinationId} = useParams();
     const destinationDetails = hotelDetails.find(detail => detail.id === destinationId)
    const {name, description, img, id} = destinationDetails;
    // const [booking, setBooking] = useState({});
    // console.log(hotelDetails.destinationId.id);
    // setBooking(`hotelDetails.${destinationId}`)

    
    
    // useEffect(() => {
    //     const url = `hotelDetails.${destinationId}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setBooking(data));
    // }, [])

    
    return (
        <div>
            <div className="booking-details">
                    <h2 className = "text-center">{name}</h2>
                    <h4 className = "text-muted">{description}</h4>
                    <img src={img} alt=""/>
            </div>

            <div className = "date-picker">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {/* <BasicDatePicker></BasicDatePicker> */}
                    <KeyboardDatePickerExample></KeyboardDatePickerExample>
                    {/* <KeyboardDatePickerExample></KeyboardDatePickerExample> */}

                    </MuiPickersUtilsProvider>

                    <Link to = {`/hotel/${id}`}>
                    <button className="btn-warning">
                        Proceed
                    </button>
                    </Link>
            </div>
            
            
        </div>
    );
};

export default Book;