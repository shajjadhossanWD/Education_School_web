import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Shortservice from '../Shortservice/Shortservice';
import Slider from '../Slider/Slider';

const Home = () => {
    const [data] = useData([]);
    console.log(data)
    return (
        <div>
           {/* carousel slider section ..... */}
            <Slider/>

            {/* short services section ............  */}
            <div className="container">
            <h1>Our Some <br /> <span> Popular Services</span></h1>
            <Row xs={1} md={2} className="g-4">
             {
                data.slice(1, 5).map(da => <Shortservice data={da}></Shortservice>)
             }
             </Row>
            </div>
        </div>
    );
};

export default Home;