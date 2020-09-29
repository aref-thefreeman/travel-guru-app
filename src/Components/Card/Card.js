import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css'


const CardDetails = (props) => {
    const {name, id, description, img} = props.hotel;
    return (
        <div>
            <Card style={{ width: '20rem', marginLeft: "2rem" }}>
            <Card.Img style={{ width: '19rem', height: "20rem"}} variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button className= "btn-warning" variant="primary"> <Link to = {`/booking/${id}`} hotel ={props.hotel}> Book Now</Link></Button>
                </Card.Body>
        </Card>
        </div>
    );
};

export default CardDetails;