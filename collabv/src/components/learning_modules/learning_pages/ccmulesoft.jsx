import React, { Component } from 'react'
import { Button } from '@mui/material'
import { Image } from 'antd'
import { Collapse } from 'antd';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from '@mui/icons-material/Link';
import FlipCard from '../flippingcards/cards';
import "../learning_pages/index.css";
import { dataforccMulpage } from '../learning_pages/data.json'
const items = dataforccMulpage;

export class ccmulesoft extends Component {
    render() {
        return (
            <div>
                <div style={{ padding: '10px', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '10px' }}>Cloud computing- Mulesoft</h1>
                    <h2 style={{ marginBottom: '20px' }}>2 Participants</h2>
                    {/* <Button variant="contained" href="/learning/ccmulcontent" style={{ color: 'white' }}>Join</Button> */}
                </div>
                <div className='image'>
                    <Image
                        height={518}
                        width={1450}
                        style={{ display: 'flex', margin:0,objectFit:'cover', alignContent: 'center', borderRadius:10 }}
                        src="/imgforcollab/collabvisionlearningmulsoft.webp"
                    />
                </div>
                <div className='about'>
                    <h1>About</h1>
                    <p>Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.</p>
                    <p>You can also join this program via the mobile app.<a href='#'> Go to the app</a></p>
                </div>
                <div style={{ marginRight: '250px', marginLeft: '250px' }}>
                    <Collapse items={items} />
                </div>
                <FlipCard/>
                <hr className='hrs' />
                <div className='pf'>
                    <h3>Price</h3>
                    <p>Free</p>
                </div>
                <hr className='hrs' />
                <div className="socialMedia-icons-ler">
                    <h2 >Share</h2>
                    <a href="https://www.instagram.com/collabvisioninfo/" >
                        <InstagramIcon fontSize="large" />
                    </a>
                    <a href="https://www.facebook.com/sujatapradeepbadi/">
                        <FacebookIcon fontSize="large" />
                    </a>
                    <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a href="https://www.collabvision.in/challenge-page/eb99df81-4fbb-46cb-9399-93508cc814c2">
                        <LinkIcon fontSize="large" />
                    </a>
                </div>
                {/* <Button variant="contained" href="/learning/ccmulcontent" style={{ color: 'white', alignItems: 'center', margin: 10, marginLeft: '47%' }}>Join</Button> */}
            </div>
        )
    }
}

export default ccmulesoft

