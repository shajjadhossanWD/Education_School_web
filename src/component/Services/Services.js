import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Service from '../Service/Service';

const Services = () => {
    const [data] = useData([]);
    return (
        <div className="container">
        <h1>Explore Our <br/> <span>Best Services</span> </h1>
        <Row xs={1} md={2} lg={3} className="g-4">
           {
               data.map(singeldata =><Service key = {singeldata.rated} singeldata = {singeldata}></Service>)
           }
        </Row>
        </div>
    );
};

export default Services;