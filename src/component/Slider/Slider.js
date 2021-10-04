import React from 'react';
import "./Slider.css";
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel fade interval={2000}>
        <Carousel.Item>
          <img
            className="d-block  carouselImg"
            src="https://www.cui.edu/portals/0/adam/blog%20app/2rsluq-jveky37xgqkzhpq/image/relevancy.jpg"
            alt="First slide"
          />  
          <Carousel.Caption>
            <h1 className="heading">Welcome To WEBEDU.</h1>
            <h1 className="w-75 mx-auto  mb-3 sub_heading">Grow your Knowledge and bulid your golden career with us.</h1>
            <p className="w-50 mx-auto  mb-5 pb-5">Find Online Educational safe and secure! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. </p>
          </Carousel.Caption>
        </Carousel.Item>   
        <Carousel.Item>
          <img
            className="d-block  carouselImg"
            src="https://cdn.wallpapersafari.com/93/47/ME5Nxe.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h1 className="heading">Welcome To WEBEDU.</h1>
            <h1 className="w-75 mx-auto mb-3 sub_heading">Teaching in an online learning context</h1>
            <p className="w-50 mx-auto mb-5 pb-5 discription">  In this model, the teacher's role in online conferencing is to facilitate learning. Her description suggests that the e-moderator does not require extensive subject matter expertise</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  carouselImg"
            src="https://m.media-amazon.com/images/I/61LffIJxHJL._AC_SL1468_.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h1 className="heading">Welcome To WEBEDU.</h1>
            <h1 className="w-75 mx-auto mb-3 sub_heading">It is even Better then an expensive learning courses.</h1>
            <p  className="w-50 mx-auto mb-5 pb-5 ">Here you can learn all those things which is very important for our modern live, if you want to became a programmer it's perfect for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;