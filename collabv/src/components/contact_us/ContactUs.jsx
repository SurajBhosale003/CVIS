import React, { useRef } from 'react';
import FAQDropdown from "./FAQDropdown";

import './Contact.css';

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

  
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
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

      <div className="contact-form-section">
        <form className="contact-form" >
          <h2>Contact us form</h2>
          <label>
            First Name:
            <input type="text" placeholder='ABC' />
          </label>
          <label>
            Last Name:
            <input type="text" placeholder='XYZ' />
          </label>
          <label>
            Email:
            <input type="email"  placeholder='xyz@gmail.com' />
          </label>
          <label>
            Phone No:
            <input type="text"  placeholder='+911234567890' />
          </label>
          <label>
            Subject:
            <input type="text"  placeholder='If any query please enter your query' />
          </label>
          <label>
            Your message:
            <textarea  placeholder='Enter your message'></textarea>
          </label>
          <button type="submit"  >Submit</button>
        </form>
      </div>
    </div>
    <FAQDropdown/>
    </>
  );
}

export default ContactUs;
// import React, { useRef } from 'react';
// import FAQDropdown from "./FAQDropdown";
// import {getFirebase,collection, addDoc, getFirestore} from "firebase/firestore"
// import{ app} from "../../Firebase"
// import './Contact.css';

// const firestore=getFirestore(app);
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

//   const writedata=async()=>{
//     const result=await addDoc(collection(firestore, 'contactus'),{
//       fName:"Lahu",
//       lName:"Andhale",
//       email:"lahu321@gamil.com",
//       message:"Convey the msg"
//     });
//     console.log("Result is ",result);
//   };
  
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

//       <div className="contact-form-section">
//         <form className="contact-form" >
//           <h2>Contact us form</h2>
//           <label>
//             First Name:
//             <input type="text" placeholder='ABC' />
//           </label>
//           <label>
//             Last Name:
//             <input type="text" placeholder='XYZ' />
//           </label>
//           <label>
//             Email:
//             <input type="email"  placeholder='xyz@gmail.com' />
//           </label>
//           <label>
//             Phone No:
//             <input type="text"  placeholder='+911234567890' />
//           </label>
//           <label>
//             Subject:
//             <input type="text"  placeholder='If any query please enter your query' />
//           </label>
//           <label>
//             Your message:
//             <textarea  placeholder='Enter your message'></textarea>
//           </label>
//           <button type="submit" onClick={writedata} >Submit</button>
//         </form>
//       </div>
//     </div>
//     <FAQDropdown/>
//     </>
//   );
// }

// export default ContactUs;

