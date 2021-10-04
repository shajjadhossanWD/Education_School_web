
import React from 'react';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';

const AboutInfo = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h2-image-5.jpg" />
                    <Card.Body>
                    <Card.Title>Welcome to WebEdu</Card.Title>
                    <Card.Text>
                       We provide you our best services. If want to build your skills it's the right place. Here you can learn all those things that's you actually want.Thank's for visit our website. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/h2-image-6.jpg" />
                    <Card.Body>
                    <Card.Title>Why Choose Us?</Card.Title>
                    <Card.Text>
                       We provide you our best services and also if you have no skills, no problem we teaching here zero level to upper level. And also all teacher teach you vary friendly way. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>Learning includes</Card.Title>
                    <Card.Text>
                      <ul>
                          <li><i className="far fa-hand-point-right"></i>We enrich lives through playing</li>
                          <li><i className="far fa-hand-point-right"></i>Guiding the young generation</li>
                          <li><i className="far fa-hand-point-right"></i>Easy method of learning </li>
                          <li><i className="far fa-hand-point-right"></i>Learn to confidently talk</li>
                          <li><i className="far fa-hand-point-right"></i>Clear your all doubts personaly</li>
                      </ul>
                      <ButtonGroup className="btn btn-primary">Read-More</ButtonGroup>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutInfo;