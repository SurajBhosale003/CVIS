import  { Component } from 'react';
import { Card, Carousel } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ourfeed.css'

export class OurFeedback extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 400,
      autoplaySpeed: 1300,
      cssEase: 'linear',
    };
    const centerDotsStyle = {
      display: 'flex',
      
      justifyContent: 'center',
      marginBottom: '20px', // Adjust this margin as needed
    };
    return (
      <div className='feedHeader'>
        <h1 className='feedheadertitle'>Our Feedbacks</h1>
        <Carousel style={centerDotsStyle} {...settings} dots>
          <Card>
            <h3>Tejswini Lad, Kolhapur</h3>
            <p>
              I am so glad we now have
              <br /> organizations like Collab Vision Infosolutions
              <br />to help learners like me
            </p>
            <p>
              Tejaswini Lad
              <br />Associate Software Engineer
              <br />Annual Salary Offered: INR 4.5 Lakhs
            </p>
          </Card>
          <Card>
            <h3>Pooja Gaikwad, Pune</h3>
            <p>
              I truly appreciate Collab Vision
              <br />Infosolotions training and am very happy that I got a job!
            </p>
            <p>
              Pooja Gaikwad
              <br />Software Engineer
              <br />Annual Salary Offered: INR 3.1 Lakhs
            </p>
          </Card>
          <Card>
            <h3>Neha Nikam, Hyderabad</h3>
            <p>
              I would like to thank them for doing
              <br />their best to get me this opportunity
            </p>
            <p>
              Neha Nikam
              <br />Cloud Engineer
              <br />Annual Salary Offered: INR 5 Lakhs
            </p>
          </Card>
          <Card>
            <h3>Tejswini Lad 2, Kolhapur</h3>
            <p>
              I am so glad we now have
              <br />organizations like Collab Vision Infosolutions
              <br />to help learners like me
            </p>
            <p>
              Tejaswini Lad
              <br />Associate Software Engineer
              <br />Annual Salary Offered: INR 4.5 Lakhs
            </p>
          </Card>
          <Card>
            <h3>Tejswini Lad 3, Kolhapur</h3>
            <p>
              I am so glad we now have
              <br />organizations like Collab Vision Infosolutions
              <br />to help learners like me
            </p>
            <p>
              Tejaswini Lad
              <br />Associate Software Engineer
              <br />Annual Salary Offered: INR 4.5 Lakhs
            </p>
          </Card>
          <Card>
            <h3>Tejswini Lad 4, Kolhapur</h3>
            <p>
              I am so glad we now have
              <br />organizations like Collab Vision Infosolutions
              <br />to help learners like me
            </p>
            <p>
              Tejaswini Lad
              <br />Associate Software Engineer
              <br />Annual Salary Offered: INR 4.5 Lakhs
            </p>
          </Card>
        </Carousel>
      </div>
    );
  }
}

export default OurFeedback;
