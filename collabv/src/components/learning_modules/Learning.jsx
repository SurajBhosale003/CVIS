
import './Learning.css'
import FeedbackSlider from './FeedbackSlider';
import { useState } from 'react';

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase"; 

import { TaggedContentCard } from 'react-ui-cards';
const cardData = [
  {
    "href": "/learning/ccpage",
    "thumbnail": "https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/The-5-Biggest-Cloud-Computing-Trends-In-2021/960x0.jpg?format=jpg&width=960",
    "title": "Cloud computing -Salesforce",
    "description": "Best resource to learn Cloud computing",
    "tags": [
      "Free"
    ]
  },
  {
    "href": "/learning/softwaretestinfpage",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_9e9081d1352843778dec36e8d8ff8c95~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Software testing",
    "description": "Grate material to learn the software testing",
    "tags": [
      "Free",
    ]
  },
  {
    "href": "/learning/ccmulesoft",
    "thumbnail": "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?w=1060&t=st=1691315861~exp=1691316461~hmac=87318722d9b334d9ce0454cbdd3b676c146bdd6e28af7d30f3f30549eea36586",
    "title": "Cloud computing- Mulesoft",
    "description": "Rated course for cloud computing",
    "tags": [
      "Free ",
    ]
  }
];
function Learning() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
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
  
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in the mandatory fields.");
      return;
    }
  
    try {
      await addDoc(collection(db, "Student register"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        
        timestamp: new Date(),
      });
  
      console.log("Feedback data sent to Firestore");
  
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
      });
    } catch (error) {
      console.error("Error sending feedback: ", error);
    }
  };
  
  return (
    <>
    <h1 className='HeaderText'>Learning</h1>
     <div className='cards'>
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

      <div className="contact-form-section">
          <form className="contact-form">
            <h2>Register Now</h2>
            <div className="contact-form-cotainer">
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  style={{marginLeft:20}}
                  placeholder="ABC"
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  style={{marginLeft:20}}
                  placeholder="XYZ"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  style={{marginLeft:20}}
                  placeholder="xyz@gmail.com"
                />
              </label>
              <label>
                Phone No:
                <input
                  type="text"
                  name="phoneNo"
                  style={{marginLeft:20}}
                  placeholder="+911234567890"
                />
              </label>
            </div>
            <input type="submit" style={{color:'white', backgroundColor:'#0056b3', width:800, textAlign:'center', padding:10}} value="Submit" />
          </form>
=======

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

        <div className="studentFeedbackSlider">
        <FeedbackSlider/>

        </div>
    </>
  )
}

export default Learning;