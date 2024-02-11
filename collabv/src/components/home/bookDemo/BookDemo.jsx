
import { useState } from 'react';
import "./BookDemo.css";


import emailjs from "@emailjs/browser";


import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';

import File from "../../../assets/file.mp4";
import Button from "@mui/material/Button";
import FeedbackForm from "./FeedbackForm";

const BookDemo = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isDemoBooked, setDemoBooked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  });

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNo) {
      alert("Please fill in the mandatory fields.");
      return;
    }

    try {
      await addDoc(collection(db,  "CustomerRegister"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        timestamp: new Date(),
      });

      console.log("CustomerRegister data sent to Firestore");

      // Send email
      sendEmail();
      
      const response = await fetch("/send-BookDemo-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(
          "BookDemo data sent to Firestore and email sent successfully"
        );
      } else {
        console.error("Error sending email");
      }

      setDemoBooked(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
      });
    } catch (error) {
      console.error("Error sending bookDemo data: ", error);
    }
  };

  const sendEmail = () => {
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo: formData.phoneNo,
      did:" Booked demo",
      form:" Book Demo form Email",
      regardings:" This email is from the bookDemo Form section of collabvision.in."
    };

    emailjs
                               
      .send(
        "service_gjd2eit", // service key 
        "template_o6bew6f", // templete id 
        templateParams,
        "0pbhO_v1wn0wA9fwI"//  public key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="video-container">
        <video
          src={File}
          className="video"
          width="100%"
          height="100%"
          muted
          autoPlay
          loop
        />
        <div className="overlay-text">
        <h1 >Book Your Free Demo</h1>
           <p >             Get to know Collab Vision Infosolutions! Our product experts will
            guide you through our solution:
           </p>
          <li >Introduction to all product features</li>
           <li >Important features for your business priorities</li>
           <li >Answers to any questions you may have</li>
          <h1 >{isDemoBooked ? 'Demo Booked' : ''}</h1>
          <p >

            {isDemoBooked
              ? "Thank you for booking the demo. Our product experts will be in touch shortly."
              : ""
            }
          </p>
          <div className="BookNow-btn">
            {isDemoBooked ? (
              <Button variant="contained" disabled>
                Booked
              </Button>
            ) : (
              <Button variant="contained" onClick={isPopupOpen ? closePopup : openPopup}>
                {isPopupOpen ? 'Close' : 'Book Now'}
              </Button>
            )}
            {isPopupOpen && !isDemoBooked && (
              <div>
                <div className="BookDemo-form-section">
                  <form className="BookDemo-form" onSubmit={handleSubmit}>
                    <h2>Register Now</h2>
                    <div className="BookDemo-form-container">
                      
                      <label  >
                        First Name:
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="ABC"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                       
                      <label  >
                        Last Name:
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="XYZ"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                        
                        
                      <label>
                        Email:
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="xyz@gmail.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        
                      
                      <label>
                        Phone No:
                        </label>
                        <input
                          type="text"
                          name="phoneNo"
                          placeholder="+911234567890"
                          value={formData.phoneNo}
                          onChange={handleInputChange}
                        />

                    </div>
                    <Button variant="contained" type="submit"  value="Submit" styles={{padding:"2%" , margin : "2%"}}>
                    submit
                                 
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="GiveFeedback-container">
        <div className="GiveFeedback-Header">
          <h1>Customer's Feedback</h1>
          <p>We’d love to hear what you thought about our services.</p>
        </div>
        <div className="GiveFeedback-Form">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
