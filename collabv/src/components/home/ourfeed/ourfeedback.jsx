// import  { Component } from 'react'
// import Slider from "react-slick";
// //import { Card } from 'react-ui-cards';
// import "../ourfeed/ourfeedback"
// const ourfeedData = [
//   {
//     "title": "Tejswini Lad, Kolhapur",
//     "info": "hi",
//   },
//   {
//     "title": "Tejswini Lad, Kolhapur",
//     "info": "by ",
//   },
//   {
//     "title": "Tejswini Lad, Kolhapur",
//     "info": "hhh",
//   }
// ];
// // export class OurFeedback extends Component {
// //   render() {
// //     const settings = {
// //       infinite: true,
// //       slidesToShow: 3,
// //       slidesToScroll: 1,
// //       autoplay: true,
// //       speed: 400,
// //       autoplaySpeed: 1500,
// //       cssEase: "linear"
// //     };
// //     return (
// //       <div className='feedHeader'>
// //         <h1 className='feedheadertitle'>Our Feedbacks</h1>
// //         <div>
// //         <Slider {...settings}>
// //         <div className='FeedMain'>
// //             <h3>Tejswini Lad, Kolhapur</h3>
// //             <p >I am so glad we now have<br/> organizations like Collab Vision Infosolutions <br/>to help learners like me</p>
// //             <p >Tejaswini Lad<br/>Associate Software Engineer<br/>Annual Salary Offered: INR 4.5 Lakhs</p>
// //           </div>
// //           <div>
// //           <h3>Pooja Gaikwad, Pune</h3>
// //             <p>I truly appreciate Collab Vision<br/>Infosolotions training and am very happy that I got a job!</p>
// //             <p>Pooja Gaikwad<br/>Software Engineer<br/>Annual Salary Offered: INR 3.1 Lakhs</p>
// //           </div>
// //           <div>
// //           <h3>Neha Nikam,Hyderabad</h3>
// //             <p>I would like to thank them for doing<br/> their best to get me this opportunity</p>
// //             <p>Neha Nikam<br/>Cloud Engineer<br/>Annual Salary Offered: INR 5 Lakhs</p>
// //           </div>
// //           <div>
// //           <h3>Tejswini Lad 2, Kolhapur</h3>
// //             <p>I am so glad we now have<br/> organizations like Collab Vision Infosolutions <br/>to help learners like me</p>
// //             <p>Tejaswini Lad<br/>Associate Software Engineer<br/>Annual Salary Offered: INR 4.5 Lakhs</p>
// //           </div>
// //           <div>
// //           <h3>Tejswini Lad 3, Kolhapur</h3>
// //             <p>I am so glad we now have<br/> organizations like Collab Vision Infosolutions <br/>to help learners like me</p>
// //             <p>Tejaswini Lad<br/>Associate Software Engineer<br/>Annual Salary Offered: INR 4.5 Lakhs</p>
// //           </div>
// //           <div>
// //           <h3>Tejswini Lad 4, Kolhapur</h3>
// //             <p>I am so glad we now have<br/> organizations like Collab Vision Infosolutions <br/>to help learners like me</p>
// //             <p>Tejaswini Lad<br/>Associate Software Engineer<br/>Annual Salary Offered: INR 4.5 Lakhs</p>
// //           </div>
// //         </Slider>
// //         </div>
// //       </div>
// //     );
// //   }
// // }


// export default OurFeedback;
import React, { Component } from 'react';
import Slider from 'react-slick';
import './ourfeed.css';

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
    "title": "Tejswini Lad, Kolhapur",
    "info": "I am so glad we now have organizations like Collab Vision Infosolutions to help learners like me",
  }
];

class OurFeedback extends Component {
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
      <div className="feedHeader">
        <h1 className="feedheadertitle">Our Feedbacks</h1>
        <div>
          <Slider {...settings}>
            {ourfeedData.map((item, index) => (
              <div className="FeedMain" key={index}>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default OurFeedback;
