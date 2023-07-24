import { Component } from 'react';
import './main_slider.css'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" },
    {url:"https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { url: "https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { url: "https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/7562114/pexels-photo-7562114.jpeg?auto=compress&cs=tinysrgb&w=600" },

];

export class main_slider extends Component {
    render() {
        return (
            <div className="slider-container">
                <SimpleImageSlider className="image-slider"
                    width={'100%'}
                    height={580}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    autoPlayDelay={true}
                    overflow={'hidden'}
                />
            </div>
        )
    }
}

export default main_slider
