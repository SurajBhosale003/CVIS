
import './ourfeed.css';

import  { Component } from 'react';
import Slider from 'react-slick';

import { db } from "../../../firebase"; 
import { collection, getDocs } from "firebase/firestore"; 

class OurFeedback extends Component {
  constructor() {
    super();
    this.state = {
      feedbackData: [],
    };
  }

  async componentDidMount() {
    try {
      const querySnapshot = await getDocs(collection(db, 'feedback'));
      const feedbackData = [];

      querySnapshot.forEach((doc) => {
        feedbackData.push(doc.data());
      });

      this.setState({ feedbackData });
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 300,
      autoplaySpeed: 1500,
      cssEase: 'linear',
    };

    return (
      <div className="feedHeader">
        <h1 className="feedheadertitle">Students Feedbacks</h1>
        <div>
          <Slider {...settings}>
            {this.state.feedbackData.map((item, index) => (
              <div className="FeedMain" key={index}>
                <h3>{item.firstName} {item.lastName}</h3>
                <p>{item.likedMost}</p>
                <p> Rating : {item.rating}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default OurFeedback;


// import React, { Component } from 'react';
// import Slider from 'react-slick';
// import './ourfeed.css';

// const ourfeedData = [
//   {
//     "title": "Tejswini Lad, Kolhapur",
//     "info": "I am so glad we now have organizations like Collab Vision Infosolutions to help learners like me Tejaswini Lad Associate Software Engineer Annual Salary Offered: INR 4.5 Lakhs",
//   },{
//     "title": "Neha Nikam,Hyderabad",
//     "info": "I would like to thank them for doing their best to get me this opportunity Neha nikam Cloud Engineer Annual Salary Offered: INR 5 Lakhs",
//   },{
//     "title": "Pooja Gaikwad, Pune",
//     "info": "I truly appreciate Collab Vision Infosolotions training and am very happy that I got a job!Aniket Wankhede Software Engineer Annual Salary Offered: INR 3.1 Lakhs",
//   },{
//     "title": "Tejswini Lad, Kolhapur",
//     "info": "I am so glad we now have organizations like Collab Vision Infosolutions to help learners like me",
//   }
// ];

// class OurFeedback extends Component {
//   render() {
//     const settings = {
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 400,
//       autoplaySpeed: 1500,
//       cssEase: 'linear',
//     };

//     return (
//       <div className="feedHeader">
//         <h1 className="feedheadertitle">Our Feedbacks</h1>
//         <div>
//           <Slider {...settings}>
//             {ourfeedData.map((item, index) => (
//               <div className="FeedMain" key={index}>
//                 <h3>{item.title}</h3>
//                 <p>{item.info}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }

// export default OurFeedback;
