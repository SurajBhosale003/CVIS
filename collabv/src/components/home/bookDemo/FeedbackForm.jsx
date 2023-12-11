
import { useState } from "react";
import { Rating } from "@mui/material";
import "./FeedbackForm.css";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

import emailjs from "@emailjs/browser";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rating: null,
    likedMost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: newValue,
    }));
  };

  //firebase 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in the mandatory fields.");
      return;
    }

    try {
      await addDoc(collection(db, "feedback"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        rating: formData.rating,
        likedMost: formData.likedMost,
        timestamp: new Date(),
      });
      
// Send email
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
          "Feedback data sent to Firestore and email sent successfully"
        );
      } else {
        console.error("Error sending email");
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        rating: null,
        likedMost: "",
      });

      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error sending feedback: ", error);
    }
  };

  const sendEmail = () => {
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      rating: formData.rating,
      likedMost: formData.likedMost,
      did:"submitted Feedback form",
      form:"Feedback form Email",
      regardings:"This email is from the Feedback Form section of collabvision.in."
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
    <div className="GiveFeedback-Form">
      <form onSubmit={handleSubmit}>
        <div className="row-feedback">
          <label className="label-group ">
            First Name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label className="label-group ">
            Last Name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />
        <div className="row-feedback">
          <label className="label-group ">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className="label-group ">
            Rate Our Services
            <Rating
              className="MuiRating-root "
              name="rating"
              value={formData.rating}
              onChange={(event, newValue) => handleRatingChange(newValue)}
            />
          </label>
        </div>

        <br />

        <div className="textarea-container">
          <label className="label-group ">
            What did you like best?
            <textarea
              name="likedMost"
              value={formData.likedMost}
              onChange={handleChange}
            />
          </label>
          <br />
          {/* 
        <label className="label-group ">
          How can we improve?
         
            <textarea
              name="improvementSuggestions"
              value={formData.improvementSuggestions}
              onChange={handleChange}
            />
        
        </label> */}
        </div>
        <br />
        <div className="btn-container">
          <button type="submit">Send Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
