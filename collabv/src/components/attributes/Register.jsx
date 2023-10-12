import React, { Component } from 'react'

export class Register extends Component {
    signup = () => {

    }
    render() {
        return (
            <div>
                <div id="login-form-wrap">
                    <h2>Registration</h2>
                    <form id="login-form">
                        <p>
                            <input type="text" id="username" placeholder="Enter your full name" required />
                            <i className="validation">
                                <span></span>
                                <span></span>
                            </i>
                        </p>
                        <p>
                            <input type="email" id="email" placeholder="Email Address" required />
                            <i className="validation">
                                <span></span>
                                <span></span>
                            </i>
                        </p>


                        <p>
                            <input type="password" id="password" placeholder="Enter password" required />
                            <i className="validation">
                                <span></span>
                                <span></span>
                            </i>
                        </p>
                        <p>
                            <input type="submit" id="register" value="Register" />
                        </p>
                    </form>
                    <div id="create-account-wrap">
                        <p>A member? <a href="http://localhost:5173/login">Sign in</a></p>
                        {/* Change the link before deployement */}
                    </div>
                </div>

            </div>
        )
    }
}

export default Register
