import React, { Component } from 'react'
import {Image,Button} from 'antd'

import "../servicepages/index.css"
export class garphic extends Component {
  render() {
    return (
        <>
    <div class="container">
      <div class="image">
        <Image src="https://static.wixstatic.com/media/4cdf87_e56b03edba3140d794f235bcd305d17a~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_e56b03edba3140d794f235bcd305d17a~mv2.jpg"/>
      </div>
      <div class="text">
        <h1>Graphic Designing</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel fugit reiciendis sed natus impedit perspiciatis non sit aperiam! Nostrum nihil placeat eligendi inventore deleniti fuga doloremque nesciunt quia culpa!</p>
      </div>
    </div>
    <div>
        <Button style={{ padding: '10px', alignItems: 'left' }} href="#">Previous</Button>
        <Button style={{ marginRight: '10px', alignItems: 'right' }}href="#">Next</Button>
    </div>
    </>
    )
  }
}

export default garphic
