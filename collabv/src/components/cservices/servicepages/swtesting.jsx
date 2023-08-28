import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class swtesting extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="https://static.wixstatic.com/media/4cdf87_58a160f6eef142b9b8ddefbd795eb70b~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_58a160f6eef142b9b8ddefbd795eb70b~mv2.jpg" />
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

export default swtesting;

