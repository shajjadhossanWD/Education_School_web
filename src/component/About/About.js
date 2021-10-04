import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import AboutInfo from '../AboutInfo/AboutInfo';
import Teacher from '../Teacher/Teacher';

const About = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        fetch('./teacher.json')
        .then(res => res.json())
        .then(data=>setTeachers(data))
    },[])
    return (
        <div className="container">
            <div className="about">
                <h1>About Us</h1>
                <AboutInfo></AboutInfo>
            </div>
            <div className="teachers">
            <h1>Our Most Popular Teachers</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
               {
                   teachers.map(teacher => <Teacher key ={teacher.salary} teacher = {teacher}/>)
               }
            </Row>
            </div>
        </div>
    );
};

export default About;