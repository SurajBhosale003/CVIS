import React, { Component } from 'react'

export class BookNowForm extends Component {
  render() {
    return (
      <div>
        <div className="contact-form-section">
          <form className="contact-form">
            <h2>Book Now</h2>
            <div className="contact-form-cotainer">
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  style={{marginLeft:20}}
                  placeholder="ABC"
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  style={{marginLeft:20}}
                  placeholder="XYZ"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  style={{marginLeft:20}}
                  placeholder="xyz@gmail.com"
                />
              </label>
              <label>
                Phone No:
                <input
                  type="text"
                  name="phoneNo"
                  style={{marginLeft:20}}
                  placeholder="+911234567890"
                />
              </label>
            </div>
            <input type="submit" style={{color:'white', backgroundColor:'#0056b3', width:800, textAlign:'center', padding:10}} value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default BookNowForm
