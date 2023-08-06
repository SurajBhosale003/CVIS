import './Services.css'
import React from 'react';
import { Image } from 'antd';
import { NewsHeaderCard } from 'react-ui-cards';
const cardData = [
  {
    "href": "/services/graphic",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_e56b03edba3140d794f235bcd305d17a~mv2.jpg/v1/fill/w_558,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg",
    "title": "Graphic Designing"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_9e9081d1352843778dec36e8d8ff8c95~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "SEO"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Web Design"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Android Application Development"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Digital Branding"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Software Testing"
  }, {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Cloud Services"
  }, {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Software Development"
  },{
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Resume Bulding"
  }
];
function Services() {
  return (
    <>
      <div>
        <h1 className='HeaderText'>Services</h1>
        <div className='Headerimage'>
          <Image className='img'
            height={300}
            width={1380}
            src="https://static.wixstatic.com/media/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg/v1/fill/w_1899,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg"
          />
        </div>
        <div>
          <div className='cards'>
            {cardData.map((card, index) => (
                <NewsHeaderCard
                  className='mainCard'
                  href={card.href}
                  thumbnail={card.thumbnail}
                  title={card.title}
                />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services