import { Component } from 'react';
import './main_slider.css'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://static.wixstatic.com/media/4cdf87_c8775c53de824cf581ad9ec30356c85a~mv2.jpg/v1/fill/w_1899,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_c8775c53de824cf581ad9ec30356c85a~mv2.jpg" },
    {url:"https://static.wixstatic.com/media/4cdf87_a8da590d59d244189fb1ed53b232d365~mv2.jpg/v1/fill/w_1899,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_a8da590d59d244189fb1ed53b232d365~mv2.jpg"},
    { url: "https://static.wixstatic.com/media/11062b_57f2492b9e8141f8872de110c884c3d0~mv2.jpg/v1/fill/w_1899,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_57f2492b9e8141f8872de110c884c3d0~mv2.jpg" },
    { url: "https://static.wixstatic.com/media/4cdf87_d192a958e736485680fb1f4b6b16029b~mv2.jpg/v1/fill/w_1899,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_d192a958e736485680fb1f4b6b16029b~mv2.jpg" },
    { url: "https://static.wixstatic.com/media/4cdf87_f62b00f4c59e48e981cccb7d5497a668~mv2.jpg/v1/fill/w_1899,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_f62b00f4c59e48e981cccb7d5497a668~mv2.jpg" },

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
