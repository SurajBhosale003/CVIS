import  { useState } from 'react'; 
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../../Firebase'; 

export default function BookNowForm() {
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

      console.log("Student data sent to Firestore");

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
      });
    } catch (error) {
      console.error("Error sending student data: ", error);
    }
  }

  return (
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
  );
}
