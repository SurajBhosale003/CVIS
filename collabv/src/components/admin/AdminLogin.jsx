

import  { Component } from 'react';
import './logincss.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

class AdminLogin extends Component {
  signIn = () => {
    const email =  'collabvisiontest001@gmail.com';
    const password ='123456';

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user); 
//pas = 123456 -------------------------------------
//key = 12345  -------------------------------------
        if (user.email === 'collabvisiontest001@gmail.com') {
          // If the user is an admin, prompt for the secret key
          const secretKey = prompt('Please enter the secret key:');
          if (secretKey === '12345') {
            // If the secret key is correct, redirect to the admin dashboard
            window.location.href = 'http://localhost:5173/admin-dashboard'; // Replace with your desired URL
          } else {
            alert('Invalid secret key. Please try again.');
          }
        } else {
         
          window.location.href = 'http://localhost:5173'; // Replace with your desired URL
        }
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error('Sign-in error:', error);
        alert('Invalid email or password. Please try again.');
      });
  };

 

  render() {
    return (
      <div>
        <div id="login-form-wrap">
          <h2>Admin Login</h2>
          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.signIn();
            }}
          >
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
              <input type="submit" id="login" value="Login" />
            </p>
          </form>
         <div id="create-account-wrap"></div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
