import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Shortservice.css';



const Shortservice = (props) => {
 const {title, img, rating, rated, price, teacher,discription} = props.data;
    return (
        <Col>
        <Card className="cards">
          <Card.Img variant="top" src={img} className="slider_img"/>
          <Card.Body>
            <Card.Title className="text-primary">{title}</Card.Title>
            <Card.Text>
            <Rating
                className="rating"
                initialRating={rating}
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              /> <b>(rated:{rated})</b>
               <p><b>$ {price}</b> only</p>
               <p><b>Teacher: {teacher}</b></p>
               <p>{discription}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Shortservice;