import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class Consultingpage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="https://media.licdn.com/dms/image/D4D12AQHHzV6n8PEaeg/article-cover_image-shrink_720_1280/0/1686668361893?e=2147483647&v=beta&t=W6iLChNfF0nVUu7_5BX-WG3B-ZDiD9cgXgfnxEDxFA0" />
          </div>
          <div className="text">
            <h1 className='texth1'>Consulting about Technology</h1>
            <h3>About</h3>
            <p>
            Do you need a mobile app for your business? We are here to help you out! We encompass a diverse range of expertise, including strategizing technology initiatives aligned with business goals, facilitating digital transformation by integrating innovative solutions like cloud computing and AI, fortifying cybersecurity measures to safeguard data and systems, optimizing IT infrastructure for scalability and reliability, managing projects efficiently, ensuring regulatory compliance, fostering skill development, and aiding in vendor selection. Consultants tailor their approach to address each company's unique challenges, aiming to enhance operations, drive innovation, and achieve sustainable growth.
            </p>
            <Button className='enqbtn' variant="contained" type='submit' href="/contact" style={{color:'white'}}>Enquiry</Button>
          </div>
        </div>
        <div className="button-container">
          <Button 
          className='btn1'
         href="#">
            Previous
          </Button>
          <Button
            className='btn2'
            href="#"
          >
            Next
          </Button>
        </div>
      </>
    );
  }
}

export default Consultingpage;

