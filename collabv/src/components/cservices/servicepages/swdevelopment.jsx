import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class swdevelopment extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="https://static.wixstatic.com/media/4cdf87_10efa682cfba485d983f4cb28e0c8ac4~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_10efa682cfba485d983f4cb28e0c8ac4~mv2.jpg" />
          </div>
          <div className="text">
            <h1 className='texth1'>Software Development</h1>
            <h3>About</h3>
            <p>
            We provide exclusive software development services that seamlessly adapt to your project objectives and business needs, from IT strategy advice and thorough technology roadmaps through the end-to-end implementation of scalable solutions. We provide startups, small-to-midsize (SMB), and enterprise-size companies with top-notch custom software development services.There is always a desire for new technology and services in this tech-savvy and digital world. The world is continuously moving toward new breakthroughs and innovation, and many organizations must adapt to these changes by implementing new software and technology.Software Maintenance & Support: Our committed, competent offshore resources ensure that routine maintenance and additions to existing applications are carried out with a strong emphasis on excellence and adherence to SLAs. We begin by analyzing existing applications, which aids in smooth technological change and seamless knowledge transfer during the early stages of application management.
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

export default swdevelopment;
