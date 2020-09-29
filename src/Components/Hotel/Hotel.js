import React from 'react';
import { useParams } from 'react-router-dom';
import hotelDetails from '../../FakeData/FakeData';
import Room from '../Room/Room';
import './Hotel.css';

const Hotel = () => {

    const {hotelId} = useParams();
    const hotelInfo = hotelDetails.find(info => info.id === hotelId);
    const {id, name, destinationMap } = hotelInfo;


    return (
        <div className = "hotel-room">
            <h2>Stays in {name}</h2>
            {
                hotelInfo.roomDetails.map(room => <Room room= {room} hotelInfo = {hotelInfo}> </Room>)
            }
            
            
            <div className = "customized-map">
                    <div className = "map-area">
           
                    <iframe className = "map-properties" src={`https://maps.google.com/maps?q=${destinationMap}&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
                    </div>
            </div>

            {/* <img src={`https://maps.google.com/maps?q=${destinationMap}&t=&z=13&ie=UTF8&iwloc`} alt=""/> */}

           

        </div>
    );
};

export default Hotel;