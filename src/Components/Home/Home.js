import React from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import Sajek from "../../Image/Sajek.png"
import Sreemongol from "../../Image/Sreemongol.png"
import Sundorbon from "../../Image/sundorbon.png";
import hotelDetails from '../../FakeData/FakeData';
import CardDetails from "../Card/Card";
import Rectangle from '../../Image/Rectangle 1.png'

// import { Button, Card } from '@material-ui/core';


const Home = () => {
    return (
        <div>
            <img className = "app-bg" src={Rectangle} alt=""/>
        
        <div className="custom-card-style">

        {
            hotelDetails.map(hotel => <CardDetails hotel = {hotel} >hotel.id</CardDetails> )
        }
{/* 
        <Card style={{ width: '30rem', marginLeft: "2rem" }}>
            <Card.Img style={{ width: '19rem', height: "20rem"}} variant="top" src={Sajek} />
                <Card.Body>
                <Card.Title>Card Title {hotelDetails.map( hotel => hotel.name )} </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                         the card's content.
                    </Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
        </Card>


        <Card style={{ width: '30rem', marginLeft: "2rem"}}>
            <Card.Img style={{ width: '19rem', height: "20rem"}} variant="top" src={Sreemongol} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                         the card's content.
                    </Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
        </Card>


        <Card style={{ width: '30rem', marginLeft: "2rem" }}>
            <Card.Img style={{ width: '19rem', height: "20rem"}} variant="top" src={Sundorbon} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                         the card's content.
                    </Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
        </Card> */}
        </div>
            
        </div>
    );
};

export default Home;