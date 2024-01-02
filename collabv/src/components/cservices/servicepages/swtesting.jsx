import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class swtesting extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="/imgforcollab/collabvisionlearningsoftwaretesting.webp" />
          </div>
          <div className="text">
            <h1 className='texth1'>Software Testing</h1>
            <h3>About</h3>
            <p>
            QA and software testing services aim to ensure that software fully meets requirements and user expectations. ScienceSoft provides full-range QA services to help our customers deliver high-quality software meeting tight deadlines of frequent releases.

Software testing services

We offer manual and automated testing activities within one-time and continuous testing engagements that include such testing types as:Functional testingIntegration testingCompatibility testingLocalization testingAccessibility testingPerformance testingUsability testingSecurity testing.

Managed testing teams

We provide a testing team to take over a part or the whole scope of testing activities within your project under the control of your in-house QA manager.

We combine manual and automated testing and apply our experience with trusted automation frameworks to help you accelerate releases, increase test coverage, and find more bugs before they enter production
            </p>
            <Button className='enqbtn' variant="contained" type='submit' href="/contact" style={{color:'white'}}>Enquiry</Button>
          </div>
        </div>
        <div className="button-container">
          <Button 
          className='btn1'
         href="/services/digitalbrandpage">
            Previous
          </Button>
          <Button
            className='btn2'
            href="/services/cloudpage"
          >
            Next
          </Button>
        </div>
      </>
    );
  }
}

export default swtesting;

