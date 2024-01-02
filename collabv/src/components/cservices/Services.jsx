import './Services.css'
import React from 'react';
import { Image } from 'antd';
import { NewsHeaderCard } from 'react-ui-cards';
const cardData = [
  {
    "href": "/services/graphic",
    "thumbnail": "/imgforcollab/colllabvisionservicesgraphic.webp",
    "title": "Graphic Designing"
  },
  {
    "href": "/services/seopage",
    "thumbnail": "/imgforcollab/collabvisionservices_seo.webp",
    "title": "SEO"
  },
  {
    "href": "/services/webdesign",
    "thumbnail": "/imgforcollab/collabvisionservices_webdesign.webp",
    "title": "Web Design"
  },
  {
    "href": "/services/androidpage",
    "thumbnail": "/imgforcollab/collabvisionservices_androidpage.webp",
    "title": "Android Application Development"
  },
  {
    "href": "/services/Consultingpage",
    "thumbnail": "/imgforcollab/collabvisionservices_consultingpage.jpeg",
    "title": "Consulting about Technology"
  },{
    "href": "/services/digitalbrandpage",
    "thumbnail": "/imgforcollab/collabvisionservices_digitalbrandpage.webp",
    "title": "Digital Branding"
  },
  {
    "href": "/services/softwaretesting",
    "thumbnail": "/imgforcollab/collabvisionlearningsoftwaretesting.webp",
    "title": "Software Testing"
  }, {
    "href": "/services/cloudpage",
    "thumbnail": "/imgforcollab/collabvisionservices_cloudpage.webp",
    "title": "Cloud Services"
  }, {
    "href": "/services/swdevelopment",
    "thumbnail": "/imgforcollab/collabvisionservices_softwaredev.webp",
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
            src="./imgforcollab/collabvisionservicelayout.webp"
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