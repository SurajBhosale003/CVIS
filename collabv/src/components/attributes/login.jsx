

// import { Component } from 'react';
// import "./logincss.css"
// import { signInWithEmailAndPassword } from 'firebase/auth'; 
// import { auth } from '../../Firebase'; 

// class Login extends Component {
//   signIn = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // User signed in successfully
//         const user = userCredential.user;
//         console.log('User signed in:', user);
//       })
//       .catch((error) => {
//         // Handle any sign-in errors here
//         console.error('Sign-in error:', error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <div id="login-form-wrap">
//           <h2>Login</h2>
//           <form
//             id="login-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               this.signIn();
//             }}
//           >
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
//               <input type="submit" id="login" value="Login" />
//             </p>
//           </form>
//           <div id="create-account-wrap">
//             <p>Not a member? <a href="http://localhost:5173/auth/register">Create Account</a></p>
//             {/* Change the link before deployment */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;



import  { Component } from 'react';
import './logincss.css';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase';

class Login extends Component {
  signIn = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        
        window.location.href = 'http://localhost:5173'; // Replace with your desired URL
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error('Sign-in error:', error);
        alert('Invalid email or password. Please try again.');
      });
  };

  resetPassword = () => {
    const email = document.getElementById('email').value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent. Please check your inbox.');
      })
      .catch((error) => {
        console.error('Password reset error:', error);
        alert('Unable to send a password reset email. Please try again.');
      });
  };

  render() {
    return (
     
      <div>
        <div id="login-form-wrap">
          <h2>Login</h2>
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
          <div id="create-account-wrap">
            <p>Not a member? <a href="http://localhost:5173/auth/register">Create Account</a></p>
            {/* Change the link before deployment */}
            <p> Forgot Password? <a onClick={this.resetPassword}> Reset Password</a></p>

          </div>
        </div>
      </div>
    
    );
  }
}

export default Login;
