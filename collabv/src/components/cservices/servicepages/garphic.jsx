import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class Graphic extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="/imgforcollab/colllabvisionservicesgraphic.webp" />
          </div>
          <div className="text">
            <h1 className='texth1'>Graphic Designing</h1>
            <h3>About</h3>
            <p>
            Graphic design is nothing but visual communication to communicate messages by attractive images. Client looking for images which show their business product in an effective manner. Graphic design is craft focus in displaying elements in design. Here we give your product a beautiful look in image by graphic design. We are best graphic designer in Kolhapur.
            </p>
            <Button className='enqbtn' variant="contained" type='submit' href="/contact" style={{color:'white'}}>Enquiry</Button>
          </div>
        </div>
        <div className="button-container">
          <Button 
          className='btn1'
         href="/services/swdevelopment">
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

export default Graphic;
