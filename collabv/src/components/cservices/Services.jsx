import './Services.css'
import React from 'react';
import { Image } from 'antd';
import { NewsHeaderCard } from 'react-ui-cards';
const cardData = [
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Cloud computing -Salesforce"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_9e9081d1352843778dec36e8d8ff8c95~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Software testing"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Cloud computing- Mulesoft"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Cloud computing- Mulesoft"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Cloud computing- Mulesoft"
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Cloud computing- Mulesoft"
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
                key={index}
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