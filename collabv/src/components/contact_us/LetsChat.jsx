import { useState } from "react";
import "./LetsChat.css";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import emailjs from "@emailjs/browser";


import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const LetsChatComponent = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
 
  const handleChatClick = () => {
    setShowChat(!showChat);
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
    setShowDetailsForm(true);
  };

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNo) {
      alert("Please fill in the mandatory fields.");
      return;
    }

    try {
      await addDoc(collection(db, "Lets Chat"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        timestamp: new Date(),
      });
      sendEmail();
      
      const response = await fetch("/send-feedback-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(
          "let's chat data sent to Firestore and email sent successfully"
        );
      } else {
        console.error("Error sending email");
      }
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
      });
      alert("\t Thank You! \n Your Data has been Recorded \n We’ll reply as soon as we can")
    } catch (error) {
      console.error("Error sending details: ", error);
    }
  };

  const sendEmail = () => {
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo:formData.phoneNo,
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
      <button className="chat-button" onClick={handleChatClick}>
        {!showChat ? "Chat" : "close"}
      </button>
      {showChat && (
        <div className="chat-box">
          <div className="chat-header">
            <div className="chat-header-image">
              <img
                src="https://static.wixstatic.com/media/4cdf87_20a6654309cf4ea39eaaefed2f9cec32~mv2.png/v1/fill/w_353,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Collab%20Vision.png"
                alt="Collab Visionspng"
              />
            </div>
            <div className="chat-header-text">
              <h4>Collab Vision Infosolutions</h4>
              <p>We’ll reply as soon as we can</p>
            </div>
          </div>

          {showDetailsForm ? (
            <form className="details-form" onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="ABC"
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="XYZ"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="xyz@gmail.com"
                />
              </label>
              <label>
                Phone No:
                <input
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder="+911234567890"
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="user-input">
              <input type="text" placeholder="Type your message..." />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => handleSendMessage("User's Message")}
                style={{ backgroundColor: "green", color: "white" }}
              >
                Send
              </Button>
            </div>
          )}

          <div className="letsChat-buttons">
            <Button style={{ backgroundColor: 'black' }} onClick={() => handleSendMessage("User's Message")}>
              <ChatOutlinedIcon  style={{ color: 'white' }} fontSize="medium" />
            </Button>

            <a href="https://api.whatsapp.com/send/?phone=%2B918767421060&text=Hi%2C+I+have+a+question...&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">

            <Button variant="contained" color ="success"  >
              <WhatsAppIcon  />
            </Button>
           </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LetsChatComponent;
