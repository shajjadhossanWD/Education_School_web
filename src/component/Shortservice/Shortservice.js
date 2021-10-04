import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';


const Shortservice = (props) => {
 const {title, img, rating, rated, price, teacher} = props.data;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            <Rating
                initialRating={rating}
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              /> <b>(rated:{rated})</b>
               <p><b>$ {price}</b> only</p>
               <p>Teacher: {teacher}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Shortservice;