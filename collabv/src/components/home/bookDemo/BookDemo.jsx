// import  { useState } from 'react'; 


// import "./BookDemo.css"; 
// import File from "../../../assets/file.mp4";
// import Button from "@mui/material/Button";
//  import  BookNowForm from './BookNowForm';

// import FeedbackForm from "./FeedbackForm";

// const BookDemo = () => {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   const openPopup = () => {
//     setPopupOpen(true);
//   };
//   return (
//     <div>
//       <div className="video-container">
//         <video
//           src={File}
//           className="video"
//           width="100%"
//           height="100%"
//           muted
//           autoPlay
//           loop
//         />
//         <div className="overlay-text">
//           <h1>Book Your Free Demo</h1>
//           <p>
//             Get to know Collab Vision Infosolutions! Our product experts will
//             guide you through our solution:
//           </p>
//           <li>Introduction to all product features</li>
//           <li>Important features for your business priorities</li>
//           <li>Answers to any questions you may have</li>
//           <div className="BookNow-btn">
//             {/* <Button variant="contained">BOOk Now</Button> */}


//             <Button variant="contained" onClick={openPopup}>
//         BOOk Now
//       </Button>
//       {isPopupOpen && (
        
//         <div>
//          <BookNowForm/>
//           <p>This is the popup form content</p>
//         </div>
//       )}
      
//           </div> 
//         </div>
//       </div>


//       <div className="GiveFeedback-container">
        
//         <div className="GiveFeedback-Header">
//           <h1>Give Us Your Feedback</h1>
//           <p>We’d love to hear what you thought about our services.</p>
//         </div>
//         <div className="GiveFeedback-Form">
//         <FeedbackForm/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDemo;



import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';

import "./BookDemo.css";
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

    if (!formData.firstName || !formData.lastName || !formData.email) {
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

      console.log("Student data sent to Firestore");

      setDemoBooked(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
      });
    } catch (error) {
      console.error("Error sending student data: ", error);
    }
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
        <h1 style={{color:'black'}}>Book Your Free Demo</h1>
           <p style={{color:'black'}}>             Get to know Collab Vision Infosolutions! Our product experts will
            guide you through our solution:
           </p>
          <li style={{color:'black'}}>Introduction to all product features</li>
           <li style={{color:'black'}}>Important features for your business priorities</li>
           <li style={{color:'black'}}>Answers to any questions you may have</li>
          <h1 style={{color:'black'}}>{isDemoBooked ? 'Demo Booked' : 'Book Your Free Demo'}</h1>
          <p style={{color:'black'}}>
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
                <div className="contact-form-section">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Register Now</h2>
                    <div className="contact-form-container">
                      <label>
                        First Name:
                        <input
                          type="text"
                          name="firstName"
                          style={{ marginLeft: 20 }}
                          placeholder="ABC"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </label>
                      <label>
                        Last Name:
                        <input
                          type="text"
                          name="lastName"
                          style={{ marginLeft: 20 }}
                          placeholder="XYZ"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </label>
                      <label>
                        Email:
                        <input
                          type="email"
                          name="email"
                          style={{ marginLeft: 20 }}
                          placeholder="xyz@gmail.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </label>
                      <label>
                        Phone No:
                        <input
                          type="text"
                          name="phoneNo"
                          style={{ marginLeft: 20 }}
                          placeholder="+911234567890"
                          value={formData.phoneNo}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <input
                      type="submit"
                      style={{
                        color: 'white',
                        backgroundColor: '#0056b3',
                        width: 800,
                        textAlign: 'center',
                        padding: 10,
                      }}
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="GiveFeedback-container">
        <div className="GiveFeedback-Header">
          <h1>Give Us Your Feedback</h1>
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
