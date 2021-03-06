import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Teacher.css';

const Teacher = (props) => {
    const {name, img, salary, sub, discription } = props.teacher;
    return (
      // teacher detalis cards ............
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-primary">{name}</Card.Title>
            <Card.Text>
               <p className="subject"> {sub}</p>
               <p>salary:<b>$ {salary}</b></p>
               <p>{discription.slice(1, 105)}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Teacher;