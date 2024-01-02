import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class ccpage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="/imgforcollab/collabvisionservices_seo.webp" />
          </div>
          <div className="text">
            <h1 className='texth1'>SEO</h1>
            <h3>About</h3>
            <p>
            Search Engine Optimization is technique to increase your website ranking on search engine like Google, Bing, Yahoo. Here website is targeted to visitors which improve your ranking on search engine. Now days 80 % users search on internet for their product/company/service, so SEO cannot be ignored if your developing website for your product.We make audit of your website, exact visitors, develop mobile UI, find potential keywords, meta tags, images and unique content to increase your website rank.
            </p>
            <Button className='enqbtn' variant="contained" type='submit' href="/contact" style={{color:'white'}}>Enquiry</Button>
          </div>
        </div>
        <div className="button-container">
          <Button 
          className='btn1'
         href="/services/graphic">
            Previous
          </Button>
          <Button
            className='btn2'
            href="/services/webdesign"
          >
            Next
          </Button>
        </div>
      </>
    );
  }
}

export default ccpage