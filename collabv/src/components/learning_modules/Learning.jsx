import './Learning.css'
import { TaggedContentCard } from 'react-ui-cards';
const cardData = [
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_24ddb8c3fdc24177a5cf81b83d5b9e6c~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Cloud computing -Salesforce",
    "description": "Best resource to learn Cloud computing",
    "tags": [
      "2 Participent",
      "Free",
      "New"
    ]
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_9e9081d1352843778dec36e8d8ff8c95~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Software testing",
    "description": "Grate material to learn the software testing",
    "tags": [
      "3 participent",
      "Free",
      "New Launch"
    ]
  },
  {
    "href": "/",
    "thumbnail": "https://static.wixstatic.com/media/4cdf87_c8c2b523d2d54986a21f2b964a8bd020~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    "title": "Cloud computing- Mulesoft",
    "description": "Rated course for cloud computing",
    "tags": [
      "1 Participent",
      "Free ",
      "New Launch"
    ]
  }
];
function Learning() {
  return (
    <>
     <div className='cards'>
        {cardData.map((card, index) => (
          <div key={index} className='card'>
            <TaggedContentCard
              href={card.href}
              thumbnail={card.thumbnail}
              title={card.title}
              description={card.description}
              tags={card.tags}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Learning