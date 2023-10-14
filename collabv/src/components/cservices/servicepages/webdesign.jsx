import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class webdesign extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="https://static.wixstatic.com/media/4cdf87_da23de8dd2d448e0bb976548bf82ecaf~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_da23de8dd2d448e0bb976548bf82ecaf~mv2.jpg" />
          </div>
          <div className="text">
            <h1 className='texth1'>Web Design</h1>
            <h3>About</h3>
            <p>
            Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design (UI design) authoring, including standardised code and proprietary software; user experience design (UX design) and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all. The term "web design" is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and be up to date with web accessibility guidelines.
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

export default webdesign;

