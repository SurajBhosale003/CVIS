
import  { Component } from 'react';
import Slider from 'react-slick';
import { db } from "../../firebase"; 
import { collection, getDocs } from "firebase/firestore"; 

class FeedbackSlider extends Component {
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
                <p>{item.rating}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default FeedbackSlider;
