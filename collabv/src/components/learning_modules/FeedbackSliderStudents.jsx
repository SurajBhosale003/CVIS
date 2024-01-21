

import  { Component } from 'react';
import Slider from 'react-slick';
// import './ourfeed.css';
import './FeedbackSliderStudent.css';
const ourfeedData = [
  {
    "title": "Tejswini Lad, Kolhapur",
    "info": "I am so glad we now have organizations like Collab Vision Infosolutions to help learners like me Tejaswini Lad Associate Software Engineer Annual Salary Offered: INR 4.5 Lakhs",
  },{
    "title": "Neha Nikam,Hyderabad",
    "info": "I would like to thank them for doing their best to get me this opportunity Neha nikam Cloud Engineer Annual Salary Offered: INR 5 Lakhs",
  },{
    "title": "Pooja Gaikwad, Pune",
    "info": "I truly appreciate Collab Vision Infosolotions training and am very happy that I got a job!Aniket Wankhede Software Engineer Annual Salary Offered: INR 3.1 Lakhs",
  },{
    "title": "Suraj Bhosle, Kolhapur",
    "info": "I am so glad we now have organizations like Collab Vision Infosolutions to help learners like me",
  }
];

class FeedbackSliderStudents extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 400,
      autoplaySpeed: 1500,
      cssEase: 'linear',
    };

    return (
      <div className="feedHeader1">
        <h1 className="feedheadertitle1">Our Students Feedbacks</h1>
        <div >
          <Slider {...settings}>
            {ourfeedData.map((item, index) => (
              <div className="FeedMain1" key={index}>
                <h3>{item.title}</h3>
                <p style={{textAlign:'justify'}}>{item.info}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default FeedbackSliderStudents;

