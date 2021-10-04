import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';
const Course = (props) => {
    const {name, discription, icon} = props.course;
    return (
        <Col className="course">
        <Card className="cards">
            <Card.Body>
            <i className={icon} />
            <Card.Title>{name}</Card.Title>
            <Card.Text>
               {discription}
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Course;