import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Teacher = (props) => {
    const {name, img, salary, sub, discription } = props.teacher;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
               <p> {sub}</p>
               <p>salary:<b>$ {salary}</b></p>
               <p>{discription.slice(1, 105)}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Teacher;