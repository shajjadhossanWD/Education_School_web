import React from 'react';
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact">
            <div className="img_div">
             <h1>Contact <span>Us.</span></h1>
            </div>


            <div className="container">
            <h1>Get <span>In Touch </span></h1>
                    <p className='m-2'><b>Have a question or just contact with us for buy a course ? We'd love to here from you..</b></p>
                    <div className="row">

                       {/* input group section --------------- */}
                        <div className="col-lg-7">
                        <input className="inputgrp" type="text" placeholder="Your Name" />
                        <input className="inputgrp" type="email" placeholder="Your Email" />
                        <p><input className="w-75" type="text" placeholder="Your Subject" /></p>
                        <textarea name="massage" id="" cols="40" rows="5" placeholder="Enter Your Massage"></textarea><br />
                        <button className="btn btn-primary ms-2 mb-4">Send massage</button>
                        </div>

                        {/* address and contact medium section ........ */}
                        <div className="col-lg-5">
                           <div className="contact_box">
                               <h2 className="text-primary"> <i className="fas fa-map-marker-alt"></i> Our Office Address</h2>
                               <h5>Dhanmondi 2 No sector road-12</h5>
                               <p><b>Dhanmondi, Dhaka, Bangladesh</b></p>
                           </div>
                           <div className="contact_box">
                               <h2 className="text-primary"> <i className="fas fa-envelope-open-text"></i> Email Us Directly</h2>
                               <p><b>webedu111@gmail.com</b></p>
                               <p><b>studentsupport111@gmail.com</b></p>
                           </div>
                           <div className="contact_box">
                               <h2 className="text-primary"><i className="fas fa-phone-volume"></i> Phone</h2>
                               <p><b>+880 1317-762-775</b></p>
                               <p><b>+880 1817-892-735</b></p>
                           </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Contact;