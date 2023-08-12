import React, { Component } from 'react';
import { Image, Button } from 'antd';
import '../servicepages/index.css';

class Graphic extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <Image src="https://static.wixstatic.com/media/4cdf87_e56b03edba3140d794f235bcd305d17a~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_e56b03edba3140d794f235bcd305d17a~mv2.jpg" />
          </div>
          <div className="text">
            <h1>Graphic Designing</h1>
            <h3>About</h3>
            <p>
            Graphic design is nothing but visual communication to communicate messages by attractive images. Client looking for images which show their business product in an effective manner. Graphic design is craft focus in displaying elements in design. Here we give your product a beautiful look in image by graphic design. We are best graphic designer in Kolhapur.
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
