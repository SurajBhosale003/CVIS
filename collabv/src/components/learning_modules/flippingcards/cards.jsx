import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import { Button } from 'antd';
export class FlipCard extends Component {
    render() {
        return (
            <div style={{ display: 'flex', alignContent: 'baseline', margin: 20,marginLeft:225, alignItems: 'center' }}>
                <FlippingCard style={{width:500}}>
                    <FlippingCardBack>
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundColor:'#00d4ff'
                            }}>
                             <Button variant="contained" href="/learning/ccmulcontent" style={{ color: 'white', backgroundColor:'#090979', marginTop:150, marginLeft:150, height:70,width:140, fontSize:40 }}>Join</Button>  
                        </div>
                    </FlippingCardBack>
                    <FlippingCardFront>
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundColor:'#020024'
                            }}>
                                <h1 style={{color:'white', textAlign:'center',margin:0}}>Intermidiate</h1>
                        </div>
                    </FlippingCardFront>
                </FlippingCard>
                <FlippingCard style={{width:500}}>
                    <FlippingCardBack>
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundColor:'#00d4ff'
                            }}>
                            <Button variant="contained" href="/learning/ccmulcontent" style={{ color: 'white', backgroundColor:'#090979', marginTop:150, marginLeft:150, height:70,width:140, fontSize:40 }}>Join</Button>
                        </div>
                    </FlippingCardBack>
                    <FlippingCardFront>
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundColor:'#020024'
                            }}>
                                <h1 style={{color:'white', textAlign:'center',margin:0}}>Professional</h1>
                        </div>
                    </FlippingCardFront>
                </FlippingCard>
            </div>
        )
    }
}

export default FlipCard
