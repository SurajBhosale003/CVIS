
import  { useState, useEffect } from 'react';
import './Home.css';
import Cards from './allCards/Cards';
import BookDemo from './bookDemo/BookDemo';
import MainSlider from './slider/main_slider';
import OurFeedback from './ourfeed/ourfeedback';

function Home() {
  const [isHighlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 400;

      if (scrollY > threshold) {
        setHighlighted(true);
      } else {
        setHighlighted(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MainSlider />
      <div className={`highlight-container ${isHighlighted ? 'highlighted' : ''}`}>
        <h3>Collab Vision InfoSolution is ISO certified company.</h3>
      </div>
      <Cards />
      <BookDemo />
      <OurFeedback />
    </>
  );
}

export default Home;
