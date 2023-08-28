// import React, { useState } from 'react';
// import FAQDropdown from "./FAQDropdown";
// import './Contact.css';

// import { addDoc, collection } from 'firebase/firestore';
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const onFinish = (values) => {
//   console.log(values);
// };

// function ContactUs() {

//   const validateMessages = {
//     required: '${label} is required!',
//     types: {
//       email: '${label} is not a valid email!',
//       number: '${label} is not a valid number!',
//     },
//     number: {
//       range: '${label} must be between ${min} and ${max}',
//     },
//   };
// // logic to send the data to db
//   const [fname, setfName]=useState();
//   const [lname, setlName]=useState();
//   const [phone, setPhone]=useState();
//   const [email, setEmail]=useState();
//   const [subject, setSubject]=useState();
//   const [message, setMessage]=useState();
//   const [contactus ,setContactus]=useState();
//   const cidInfoCollection=collection(db,"contactus");
//    const addnewQuery= async()=>{
//     await addDoc(cidInfoCollection,{Fname:fname,Lname:lname,Phone:phone,Eamil:email,Subject:subject,Message:message})
//    }
//   return (
//     <>
//      <h1 className="contact-title">Contact Us</h1>
//     <div className="contact-page">
//       <div className="contact-details">
//         <div className="address-section">
//           <h2>Address</h2>
//           <p>Plot No. 14, Laxmi Vasahat, Jawahar Nagar, Kolhapur- 416012</p>
//         </div>
//         <div className="contact-info">
//           <h2>Contact</h2>
//           <p>+91 8767421060</p>
//           <p>support@collabvision.in</p>
//         </div>
//         <div className="opening-hours">
//           <h2>Opening Hours</h2>
//           <p>
//             Mon - Fri 8:00 am – 8:00 pm
//             <br />
//             Saturday 9:00 am – 7:00 pm
//             <br />
//             Sunday 9:00 am – 9:00 pm
//           </p>
//         </div>
//       </div>

//       <div className="contact-container">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7721020499694!2d74.21705997490594!3d16.688283922568655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100086a48a645%3A0x67b67c3d82cd3e20!2sCollab%20Vision%20Infosolutions!5e0!3m2!1sen!2sin!4v1691763350087!5m2!1sen!2sin"
//           width="1200"
//           height="450"
//           className="contact-map"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>


// {/* contact us form section */}
//       <div className="contact-form-section">
//         <form className="contact-form">
//           <h2>Contact us form</h2>

//           <div className = "contact-form-cotainer">
//           <label>
//             First Name:
//             <input type="text" placeholder='ABC' onChange={(event)=>{
//               setfName(event.target.value)
//             }} required/>
//           </label>
//           <label>
//             Last Name:
//             <input type="text" placeholder='XYZ' onChange={(event)=>{
//               setlName(event.target.value)
//             }} required />
//           </label>
//           <label>
//             Email:
//             <input type="email" placeholder='xyz@gmail.com'onChange={(event)=>{
//               setEmail(event.target.value)
//             }} required />
//           </label>
//           <label>
//             Phone No:
//             <input type="text" placeholder='+911234567890' onChange={(event)=>{
//               setPhone(event.target.value)
//             }}required/>
//           </label>
//           <label>
//             Subject:
//             <input type="text" placeholder='If any query please enter your query' onChange={(event)=>{
//               setSubject(event.target.value)
//             }}required/>
//           </label>
//           <label>
//             Your message:
//             <textarea placeholder='Enter your message' onChange={(event)=>{
//               setMessage(event.target.value)
//             }}required></textarea>
//           </label>
//           </div>
//           <input type="submit" value="Submit" onClick={addnewQuery}/>
//         </form>
//       </div>
//     </div>
//     <FAQDropdown/>
//     </>
//   );
// }

// export default ContactUs;
import { useState } from "react";
import FAQDropdown from "./FAQDropdown";

import "./Contact.css";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const onFinish = (values) => {
  console.log(values);
};

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    Subject: "",
    message: "",
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

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in the mandatory fields.");
      return;
    }

    try {
      await addDoc(collection(db, "Contact Us"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        Subject: formData.Subject,
        message: formData.message,
        timestamp: new Date(),
      });

      

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        Subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending feedback: ", error);
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <>
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-page">
        <div className="contact-details">
          <div className="address-section">
            <h2>Address</h2>
            <p>Plot No. 14, Laxmi Vasahat, Jawahar Nagar, Kolhapur- 416012</p>
          </div>
          <div className="contact-info">
            <h2>Contact</h2>
            <p>+91 8767421060</p>
            <p>support@collabvision.in</p>
          </div>
          <div className="opening-hours">
            <h2>Opening Hours</h2>
            <p>
              Mon - Fri 8:00 am – 8:00 pm
              <br />
              Saturday 9:00 am – 7:00 pm
              <br />
              Sunday 9:00 am – 9:00 pm
            </p>
          </div>
        </div>

        <div className="contact-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7721020499694!2d74.21705997490594!3d16.688283922568655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100086a48a645%3A0x67b67c3d82cd3e20!2sCollab%20Vision%20Infosolutions!5e0!3m2!1sen!2sin!4v1691763350087!5m2!1sen!2sin"
            width="1200"
            height="450"
            className="contact-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* contact us form section */}
        <div className="contact-form-section">
          <form className="contact-form" onSubmit ={handleSubmit}>
            <h2>Contact us form</h2>

            <div className="contact-form-cotainer">
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
              <label>
                Subject:
                <input
                  type="text"
                  name="Subject"
                  value={formData.Subject}
                  onChange={handleChange}
                  placeholder="If any query please enter your query"
                />
              </label>
              <label>
                Your message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                ></textarea>
              </label>

              <button type="submit">Submit</button>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <FAQDropdown />
    </>
  );
}

export default ContactUs;

