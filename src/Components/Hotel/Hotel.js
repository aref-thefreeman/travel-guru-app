import React from 'react';
import { useParams } from 'react-router-dom';
import hotelDetails from '../../FakeData/FakeData';
import Room from '../Room/Room';
import './Hotel.css';

const Hotel = () => {

    const {hotelId} = useParams();
    const hotelInfo = hotelDetails.find(info => info.id === hotelId);
    const {id, name } = hotelInfo;


    return (
        <div className = "hotel-room">
            <h2>Stays in {name}</h2>
            {
                hotelInfo.roomDetails.map(room => <Room room= {room} hotelInfo = {hotelInfo}> </Room>)
            }

        </div>
    );
};

export default Hotel;