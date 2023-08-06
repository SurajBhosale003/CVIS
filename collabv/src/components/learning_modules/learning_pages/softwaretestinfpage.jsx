import React, { Component } from 'react'
import { Button } from '@mui/material'
import { Image } from 'antd'
import { Collapse } from 'antd';
import insta from "../../../assets/instagram.png";
import linkedin from "../../../assets/linked.png";
import facebook from "../../../assets/facebook.png";
import "../learning_pages/index.css";
import {dataforSoftwarepage} from '../learning_pages/data.json'
const items= dataforSoftwarepage;

export class softwaretestinfpage extends Component {
    render() {
        return (
            <div>
            <div style={{ padding: '10px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '10px' }}>Software Testing</h1>
                <h2 style={{ marginBottom: '20px' }}>6 Steps   |   4 Participants</h2>
                <Button variant="contained" href="#">Join</Button>
            </div>
            <div className='image'>
                <Image 
                    height={500}
                    width={1380}
                    style={{ display: 'block', margin: 'auto' }}
                    src="https://www.devprojournal.com/wp-content/uploads/2020/02/software-testing-768x432.jpg"
                />
            </div>
            <div style={{ padding: '10px' }}>
                <h1>About</h1>
                <p>In the tech industry, Software Testing is a highly sought-after position. Testing plays a vital role in the software development process by preventing bugs, reducing development costs, and improving performance. Software testing is integral to software development because it improves software quality, performance, and reliability and helps determine whether the software works correctly. Both manual and automation testing are in high demand to increase system performance.</p>
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

export default softwaretestinfpage

