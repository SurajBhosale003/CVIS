import { Component } from 'react'
import { Button } from '@mui/material'
import { Image } from 'antd'
import { Collapse } from 'antd';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from '@mui/icons-material/Link';
import "../learning_pages/index.css";
import {dataforccpage} from '../learning_pages/data.json'
const items=dataforccpage;
// const items = [
//     {
//         key: '1',
//         label: 'Chapter 1 ',
//         lable2: '2 steps',
//         children: <ul><li>Lesson 1</li><li>Lesson 2</li></ul>,
//     },
//     {
//         key: '2',
//         label:'Chapter 2',
//         lable2: '2 steps',
//         children: <ul><li>Lesson 1</li><li>Lesson 2</li></ul>,
//     },
//     {
//         key: '3',
//         label: 'Chapter 3',
//         lable2: '2 steps',
//         children: <ul><li>Lesson 1</li></ul>,
//     },
// ];
export class ccpage extends Component {
    render() {
        return (
            <div>
            <div style={{ padding: '10px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '10px' }}>Cloud Computing - Salesforce</h1>
                <h2 style={{ marginBottom: '20px' }}>3 Participants</h2>
                <Button variant="contained" href="/learning/ccpage/ccpagecontent" style={{color: 'white'}}>Join</Button>
            </div>
            <div className='image'>
                <Image 
                    height={500}
                    width={1380}
                    style={{ display: 'block', margin: 'auto' }}
                    src="https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/The-5-Biggest-Cloud-Computing-Trends-In-2021/960x0.jpg?format=jpg&width=960"
                />
            </div>
            <div className='about'>
                <h1>About</h1>
                <p>Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.</p>
                <p>You can also join this program via the mobile app.<a href='#'> Go to the app</a></p>
            </div>
            <div className='about_collapse'>
                <Collapse items={items} />
            </div>
            <hr className='hrs' />
            <div className='pf'>
                <h3>Price</h3>
                <p>Free</p>
            </div>
            <hr  className='hrs'/>
            <div className="socialMedia-icons-ler">
        <h1>Share</h1>
          <a href="https://www.instagram.com/collabvisioninfo/" >
              <InstagramIcon fontSize="large" />
            </a>
            <a href ="https://www.facebook.com/sujatapradeepbadi/">
              <FacebookIcon fontSize="large"  />
            </a>
            <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/">
              <LinkedInIcon fontSize="large"  />
            </a>
            <a href="https://www.collabvision.in/challenge-page/eb99df81-4fbb-46cb-9399-93508cc814c2">
              <LinkIcon fontSize="large"  />
            </a>
            <br/>
            
          </div>
          <Button variant="contained"  className="btnj" href="/learning/ccpage/ccpagecontent" style={{color: 'white' , alignItems:'center', marginLeft: '47%'}}>Join</Button>
            </div>
        )
    }
}

export default ccpage

{/* <div>
<div>
    <h1>Cloud Computing - Salesforce</h1>
    <h2>6 Steps| 3 Participants</h2>
    <Button variant="contained" href="#">Join</Button>
</div>
<div>
    <Image className='img'
        height={500}
        width={1380}
        src="https://static.wixstatic.com/media/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg/v1/fill/w_1899,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg"
    />
</div>
<div>
    <h1>About</h1>
    <p>Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.</p>
    <p>You can also join this program via the mobile app.<a href='#'> Go to the app</a></p>
</div>
<div>
    <Collapse items={items} >
        <ul>
            <li>Lesson</li>
        </ul>
    </Collapse>
    <hr />
</div>
<div>
    <h3>Price</h3>
    <p>Free</p>
    <hr />
</div>
<div>
    <h2>Share</h2>
    <div>
        <a href="https://www.instagram.com/your_instagram_username" >
            <img src={insta} alt="insta" className="socialMediaLogo" />
        </a>
        <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/" >
            <img src={linkedin} alt="linkedin" className="socialMediaLogo" />
        </a>
        <a href="https://www.facebook.com/sujatapradeepbadi/" >
            <img src={facebook} alt="facebook" className="socialMediaLogo" />
        </a>
    </div>
    <button>Join</button>
</div>
</div> ** <div className="ccpage-container">
  {/* 
  <div style={{ padding: '10px', textAlign: 'center' }}>
    <h1 style={{ marginBottom: '10px' }}>Cloud Computing - Salesforce</h1>
    <h2 style={{ marginBottom: '20px' }}>6 Steps | 3 Participants</h2>
    <Button variant="contained" href="#">Join</Button>
  </div>
  <div>
    <Image
      className='img'
      height={500}
      width={1380}
      src="https://static.wixstatic.com/media/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg/v1/fill/w_1899,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg"
      style={{ display: 'block', margin: 'auto', }}
    />
  </div>
  <div style={{ padding: '10px' }}>
    <h1>About</h1>
    <p>Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.</p>
    <p>You can also join this program via the mobile app.<a href='#'> Go to the app</a></p>
  </div>
  <div style={{ padding: '10px' }}>
    {/* ... 
  </div>
  <div style={{ padding: '10px' }}>
    <h3>Price</h3>
    <p>Free</p>
    <hr />
  </div>
  <div style={{ padding: '10px' }}>
    <h2>Share</h2>
    <div>
      <a href="https://www.instagram.com/your_instagram_username" >
        <img src={insta} alt="insta" className="socialMediaLogo" style={{ marginRight: '5px' }} />
      </a>
      <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/" >
        <img src={linkedin} alt="linkedin" className="socialMediaLogo" style={{ marginRight: '5px' }} />
      </a>
      <a href="https://www.facebook.com/sujatapradeepbadi/" >
        <img src={facebook} alt="facebook" className="socialMediaLogo" style={{ marginRight: '5px' }} />
      </a>
    </div>
    <Button variant="contained" href="#">Join</Button>
  </div>
</div> */}