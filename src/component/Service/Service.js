import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Service.css';

const Service = (props) => {
    const {title, img, price, teacher, rating, rated} = props.singeldata;
    return (
      //  Service card single data ....................
          <Col>
            <Card className='cards'>
              <Card.Img variant="top" src={img} />
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
                   <p>Teacher: {teacher}</p>
                   <ButtonGroup className="btn btn-primary">Add-Course</ButtonGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default Service;