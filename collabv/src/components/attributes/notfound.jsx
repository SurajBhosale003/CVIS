import React, { Component } from 'react'
import { Button } from '@mui/material'
export class notfound extends Component {
  render() {
    return (
        <div className='notfound'>
        <h1 style={{textAlign:'center'}}>404 - Page Not Found</h1>
        <h4>Sorry, the requested page does not exist.</h4> 
        <Button variant="contained" href="/" style={{ color: 'white' }}>Back to Home</Button>
        </div>
    )
  }
}

export default notfound
