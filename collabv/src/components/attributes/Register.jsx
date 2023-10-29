
// import React, { Component } from 'react';
// import "./logincss.css"

// import { createUserWithEmailAndPassword } from 'firebase/auth'; 
// import { auth } from '../../Firebase'; 

// class Register extends Component {
//   signup = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const authInstance = auth; 

//     createUserWithEmailAndPassword(authInstance, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log('User registered:', user);
//         alert('Registration successful! You can now sign in.');
//         window.location.href = 'http://localhost:5173/login'; 
//       })
//       .catch((error) => {
//         if (error.code === 'auth/email-already-in-use') {
//           alert('A user with this email address already exists. Please sign in instead.');
//           window.location.href = 'http://localhost:5173/login';
//         } else if (error.code === 'auth/weak-password') {
//           alert('Invalid password. Please enter a stronger password.');
//           document.getElementById('password').value = ''; 
//         } else {
//           console.error('Registration error:', error);
//         }
//       });
//   };

//   render() {
//     return (
//       <div>
//         <div id="login-form-wrap">
//           <h2>Registration</h2>
//           <form
//             id="login-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               this.signup();
//             }}
//           >
//             <p>
//               <input type="text" id="username" placeholder="Enter your full name" required />
//               <i className="validation">
//                 <span></span>
//                 <span></span>
//               </i>
//             </p>
//             <p>
//               <input type="email" id="email" placeholder="Email Address" required />
//               <i className="validation">
//                 <span></span>
//                 <span></span>
//               </i>
//             </p>
//             <p>
//               <input type="password" id="password" placeholder="Enter password" required />
//               <i className="validation">
//                 <span></span>
//                 <span></span>
//               </i>
//             </p>
//             <p>
//               <input type="submit" id="register" value="Register" />
//             </p>
//           </form>
//           <div id="create-account-wrap">
//             <p>Already a member? <a href="http://localhost:5173/login">Sign in</a></p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;




import  { Component } from 'react';
import './logincss.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

class Register extends Component {
  signup = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);
        alert('Registration successful! You can now sign in.');
        window.location.href = 'http://localhost:5173/login';  {/* Change the link before deployment */}
      })
      .catch((error) => {
        // Handle registration errors
        if (error.code === 'auth/email-already-in-use') {
          alert('A user with this email address already exists. Please sign in instead.');
          window.location.href = 'http://localhost:5173/login';
            {/* Change the link before deployment */}
        } else if (error.code === 'auth/weak-password') {
          alert('Invalid password. Please enter a stronger password.');
          document.getElementById('password').value = '';
        } else {
          console.error('Registration error:', error);
        }
      });
  };

  render() {
    return (
     
      <div>
        <div id="login-form-wrap">
          <h2>Registration</h2>
          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.signup();
            }}
          >
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
            <p>Already a member? <a href="http://localhost:5173/login">Sign in</a></p>
              {/* Change the link before deployment */}
          </div>
        </div>
      </div>
   
    );
  }
}

export default Register;

