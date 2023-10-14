import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class digitalbranding extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="https://static.wixstatic.com/media/4cdf87_8d9bcd61573a4b768785f5ad7c85cdf1~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_8d9bcd61573a4b768785f5ad7c85cdf1~mv2.jpg" />
          </div>
          <div className="text">
            <h1 className='texth1'>Digital Branding</h1>
            <h3>About</h3>
            <p>
            Digital branding services positions a brand in such a way that connects to those users, the right audience. Effective digital branding involves a number of methods such as search engine optimization (SEO), online advertising, content marketing, social media, and influencer marketing.Digital branding services seek to increase awareness of the brand, tell the story of the company, and cultivate & drive customer loyalty.What are branding services? Branding services provide expertise in developing and delivering comprehensive solutions regarding a company's brand, including logo creation, identity, marketing, and messaging.Our Digital Branding Services Digital brand marketing requires formulation of a marketing plan. You'll need to find out areas where advertisements are to be posted. For instance, a company manufacturing maternity items must advertise on websites, forums, and blogs where women frequent. We provide digital brand marketing services that will create a long-term impression.Our services include providing customized brand imaging solutions to clients based on their need.We will devise an annual marketing plan through which customers will be able to connect with you and your product.We will use a variety of tools like logos, videos, images, testimonials to create a positive brand name.
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

export default digitalbranding;
