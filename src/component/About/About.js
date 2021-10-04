import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import AboutInfo from '../AboutInfo/AboutInfo';
import Course from '../Course/Course';
import Teacher from '../Teacher/Teacher';
import './About.css';

const About = () => {
    const [teachers, setTeachers] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./teacher.json')
        .then(res => res.json())
        .then(data=>setTeachers(data))
    },[])

    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="container">

            <div className="about">
                <h1><span>About</span> Us</h1>
                <AboutInfo></AboutInfo>
            </div>

          <div className="teachers">
            <h1>Our Most <br /> <span> Popular Teachers</span></h1>
              <Row xs={1} md={2} lg={4} className="g-4">
               {
                   teachers.map(teacher => <Teacher key ={teacher.salary} teacher = {teacher}/>)
               }
              </Row>
           </div>

           <div className="courses">
                  <h1>Our Popular <br /> <span>Courses</span></h1>
              <Row xs={1} md={2} lg={3} className="g-4">
               
                {
                    courses.map(course => <Course key ={course.name} course = {course}/>)
                }
              </Row>
            </div>
        </div>
    );
};

export default About;