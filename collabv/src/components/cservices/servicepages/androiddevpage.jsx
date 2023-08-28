import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class androiddevpage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="https://static.wixstatic.com/media/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg" />
          </div>
          <div className="text">
            <h1 className='texth1'>Android Application Development</h1>
            <h3>About</h3>
            <p>
            Do you need a mobile app for your business? We are here to help you out! Irrespective of the size of your project, our senior project managers will work with you to select the best technology platform, define the scope, and build the right app for your business. As a leading mobile app development company in India, we have successfully delivered mobile apps for businesses of various sizes - from start-ups to large enterprises. Driven by the right strategy, creative design, and high-end technology, our native and hybrid app developers deliver products that delight your customers and grow your business. Contact us and explore our state of the art mobile app development services.When building an app, we focus on three basic aspects - the look, the ease of use, and the conversion potential. While the UI/UX attracts the customers in the first place, a robust architecture & top-notch security determine the life of an app in the long run. We believe an app that delivers value to the users will eventually drive conversions for your business. Here is an overview of the holistic approach we adopt while providing mobile app development services.
            </p>
            <button className='enqbtn'>Enquiry</button>
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

export default androiddevpage;

