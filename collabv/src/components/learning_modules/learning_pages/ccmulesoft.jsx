import React, { Component } from 'react'
import { Button } from '@mui/material'
import { Image } from 'antd'
import { Collapse } from 'antd';
import insta from "../../../assets/instagram.png";
import linkedin from "../../../assets/linked.png";
import facebook from "../../../assets/facebook.png";
import "../learning_pages/index.css";
import {dataforccMulpage} from '../learning_pages/data.json'
const items=dataforccMulpage;

export class ccmulesoft extends Component {
    render() {
        return (
            <div>
            <div style={{ padding: '10px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '10px' }}>Cloud computing- Mulesoft</h1>
                <h2 style={{ marginBottom: '20px' }}>6 Steps   |   2 Participants</h2>
                <Button variant="contained" href="#">Join</Button>
            </div>
            <div className='image'>
                <Image 
                    height={500}
                    width={1380}
                    style={{ display: 'block', margin: 'auto' }}
                    src="https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?w=1060&t=st=1691315861~exp=1691316461~hmac=87318722d9b334d9ce0454cbdd3b676c146bdd6e28af7d30f3f30549eea36586"
                />
            </div>
            <div style={{ padding: '10px' }}>
                <h1>About</h1>
                <p>Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.</p>
                <p>You can also join this program via the mobile app.<a href='#'> Go to the app</a></p>
            </div>
            <div style={{ marginRight: '250px', marginLeft:'250px' }}>
                <Collapse items={items} />
            </div>
            <hr className='hrs' />
            <div style={{ padding: '10px' }}>
                <h3>Price</h3>
                <p>Free</p>
            </div>
            <hr  className='hrs'/>
            <div style={{ padding: '10px' }}>
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
                <Button variant="contained" href="#">Join</Button>
            </div>
            </div>
        )
    }
}

export default ccmulesoft

