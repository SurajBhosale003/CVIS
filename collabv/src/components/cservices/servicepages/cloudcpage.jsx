import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class Graphic extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="https://static.wixstatic.com/media/4cdf87_30830cc2afe3401499f8eaaa2805ac59~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_30830cc2afe3401499f8eaaa2805ac59~mv2.jpg" />
          </div>
          <div className="text">
            <h1 className='texth1'>Cloud Services</h1>
            <h3>About</h3>
            <p>Cloud computing is a general term for anything that involves delivering hosted services over the internet. These services are divided into three main categories or types of cloud computing: infrastructure as a service (IaaS), platform as a service (PaaS) and software as a service (SaaS).It is process to manage and deploy applications on high end cloud servers. Companies instead of buying huge infra or servers they buy server space and as per their usage they make payments. This helps in company save time and money in managing servers and related employees. Hence Cloud computing technologoes like AWS, Azure etc is in Boom today.
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

export default Graphic;
