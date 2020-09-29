import React from 'react';
import './Room.css'
import StarIcon from '@material-ui/icons/Star';
import { Star } from '@material-ui/icons';

const Room = (props) => {
    const {name, id, roomDetails} = props.hotelInfo
    const {roomRent, hotelRoomTitle, roomRatings, hotelRoomImage, hotelRoomType, hotelKitchen, cancellation} = props.room;
    return (
        <div className = "room">
            {/* <p>Room Rent: {roomDetails.map(room => room.roomRent)}</p> */}


            
            <div className = "room-details room-details-1">
            <img src={hotelRoomImage} alt=""/>
            </div>

            <div  className = "room-details room-details-2">
                <h5>{hotelRoomTitle}</h5>
                <p>{hotelRoomType}</p>
                <p>{hotelKitchen}</p>
                <p>{cancellation}</p>

                <div className = "d-flex">

                    <p className = "room-ratings"><StarIcon/> {roomRatings}</p>
                    <p className = "room-rent">{roomRent}/ Night</p>

                </div>


            </div>

            
        </div>
    );
};

export default Room;