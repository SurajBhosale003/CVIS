import React, { Component } from 'react'

import "./logincss.css"
export class login extends Component {
    
    signin=()=>{

    }
    render() {
        return (
            <div>
                <div id="login-form-wrap">
                    <h2>Login</h2>
                    <form id="login-form">
                    <p>
                            <input type="email" id="email"  placeholder="Email Address" required />
                            <i className="validation">
                                <span></span>
                                <span></span>
                            </i>
                        </p>
                
                       
                        <p>
                            <input type="password" id="password"  placeholder="Enter password" required />
                            <i className="validation">
                                <span></span>
                                <span></span>
                            </i>
                        </p>
                        <p>
                            <input type="submit" id="login" value="Login" />
                        </p>
                    </form>
                    <div id="create-account-wrap">
                        <p>Not a member? <a href="http://localhost:5173/auth">Create Account</a></p>
                        {/* Change the link before deployement */}
                    </div>
                </div>

            </div>
        )
    }
}

export default login
