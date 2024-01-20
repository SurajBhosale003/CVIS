import "./Learning.css";
import FeedbackSliderStudents from "./FeedbackSliderStudents";
import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";


import emailjs from "@emailjs/browser";

import { TaggedContentCard } from "react-ui-cards";

import course from "./course.json";

const cardData = [
  {
    href: "/learning/ccpage",
    thumbnail:
      "imgforcollab/collabvisionlearningcloudpage.webp",
    title: "Cloud computing -Salesforce",
    description: "Best resource to learn Cloud computing",
    tags: ["Free"],
  },
  {
    href: "/learning/softwaretestinfpage",
    thumbnail:
      "/imgforcollab/collabvisionlearningsoftwaretesting.webp",
    title: "Software testing",
    description: "Grate material to learn the software testing",
    tags: ["Free"],
  },
  {
    href: "/learning/ccmulesoft",
    thumbnail:
      "/imgforcollab/collabvisionlearningmulsoft.webp",
    title: "Cloud computing- Mulesoft",
    description: "Rated course for cloud computing",
    tags: ["Free "],
  },
];

function Learning() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    selectedOption: "",
    selectedLevel:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.selectedOption||
      !formData.selectedLevel
    ) {
      alert("Please fill in the mandatory fields.");
      return;
    }

    try {
      await addDoc(collection(db, "Student register"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        selectedOption: formData.selectedOption,
        selectedLevel: formData.selectedLevel,
        timestamp: new Date(),
      });

      console.log(" data sent to Firestore");
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
    "data of registered student sent to Firestore and email sent successfully"
  );
} else {
  console.error("Error sending email");
}

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        selectedOption: "",
        selectedLevel:"",
      });
    } catch (error) {
      console.error("Error sending data: ", error);
      alert("Error sending data: ");
    }
  };

  

  const sendEmail = () => {
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo: formData.phoneNo,
      selectedOption: formData.selectedOption ,
      did:" one student registerd for cource at level  " + formData.selectedLevel  ,
      form:"Student registerd form Email",
      regardings:"This email is of collabvision.in."
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
          alert.log(error.text);
        }
      );
  };

  return (
    <>
      <h1 className="HeaderText">Learning</h1>
      <div className="cards">
        {cardData.map((card, index) => (
          <TaggedContentCard
            key={index}
            href={card.href}
            thumbnail={card.thumbnail}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </div>
{/*  ===================Reg form=============================*/}
      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Register Now</h2>
          <div className="contact-form-cotainer">
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
            
         

          <label className="op">
              Select a course:
              <select
                name="selectedOption"
                type="select"
                className="lselect"
                style={{
                  marginLeft: 20,
                  width: 760,
                  height: 60,
                  borderColor: "#ccc",
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                value={formData.selectedOption}
                onChange={handleInputChange}
              >
                <option value="" className="op">
                  Select a course
                </option>
                {course.map((option) => (
                  <option key={option.value} value={option.value} className="op">
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="op">
              Select a Level:
              <select
                name="selectedLevel"
                type="select"
                className="lselect"
                style={{
                  marginLeft: 20,
                  width: 760,
                  height: 60,
                  borderColor: "#ccc",
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                value={formData.selectedLevel}
                onChange={handleInputChange}
              >
                <option value="" className="op">
                  Select a level
                </option>
                {formData.selectedOption &&
                  course
                    .find((c) => c.value === formData.selectedOption)
                    .levels.map((level) => (
                      <option key={level} value={level} className="op">
                        {level}
                      </option>
                    ))}
              </select>
            </label>
          </div>
          <input
            type="submit"
            style={{
              color: "white",
              backgroundColor: "#0056b3",
              width: 800,
              textAlign: "center",
              padding: 10,
            }}
            value="Submit"
          />

        </form>
      </div>

      <div className="studentFeedbackSlider">
        <FeedbackSliderStudents />
      </div>
    </>
  );
}

export default Learning;
