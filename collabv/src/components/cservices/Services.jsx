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
    "href": "/services/seopage",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_7ee3d44d77304c399e99bd3daf575981~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_7ee3d44d77304c399e99bd3daf575981~mv2.jpg",
    "title": "SEO"
  },
  {
    "href": "/services/webdesign",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_da23de8dd2d448e0bb976548bf82ecaf~mv2.jpg/v1/fill/w_558,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg",
    "title": "Web Design"
  },
  {
    "href": "/services/androidpage",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg",
    "title": "Android Application Development"
  },
  {
    "href": "/services/digitalbrandpage",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_8d9bcd61573a4b768785f5ad7c85cdf1~mv2.jpg/v1/fill/w_558,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg",
    "title": "Digital Branding"
  },
  {
    "href": "/services/softwaretesting",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_58a160f6eef142b9b8ddefbd795eb70b~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_58a160f6eef142b9b8ddefbd795eb70b~mv2.jpg",
    "title": "Software Testing"
  }, {
    "href": "/services/cloudpage",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_30830cc2afe3401499f8eaaa2805ac59~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_30830cc2afe3401499f8eaaa2805ac59~mv2.jpg",
    "title": "Cloud Services"
  }, {
    "href": "/services/swdevelopment",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_10efa682cfba485d983f4cb28e0c8ac4~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_10efa682cfba485d983f4cb28e0c8ac4~mv2.jpg",
    "title": "Software Development"
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