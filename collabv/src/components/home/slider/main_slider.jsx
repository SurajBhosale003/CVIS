import { Component } from 'react';
import './main_slider.css'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "/imgforcollab/collabvisionsliderimage1.webp" },
    {url:"/imgforcollab/collabvisionsliderimage2.webp"},
    { url: "/imgforcollab/collabvisionsliderimage3.webp" },
    { url: "/imgforcollab/collabvisionsliderimage4.webp" },
    { url: "/imgforcollab/collab_visionsliderimage5.webp" },

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
