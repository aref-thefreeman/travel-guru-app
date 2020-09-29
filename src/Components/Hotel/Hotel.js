import React from 'react';
import { useParams } from 'react-router-dom';
import hotelDetails from '../../FakeData/FakeData';

const Hotel = () => {

    const {hotelId} = useParams();

    const hotelInfo = hotelDetails.find(info => info.id === hotelId);
    const {id, name,hotelRoomType } = hotelInfo;
    return (
        <div>
            Hotel room type: {hotelRoomType}
        </div>
    );
};

export default Hotel;