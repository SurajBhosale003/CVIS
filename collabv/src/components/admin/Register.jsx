import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import "./logincss.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert(e.message);
    }
  };

  return (
    <div>
      <div className="login">
        <h1>Sign up for a free account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
          </div>
          <div>
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button>Sign Up</button>
        </form>
      </div>

      <div className="login">
        <p className="py-2">
          Already have an account yet?{" "}
          <Link to="/signin" >
            Sign in.
          </Link>
        </p>
        <p>
          If admin then login here <Link to="/adminLogin">admin Sign in.</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserAuth } from '../../context/AuthContext';
// import './loginc.css'
// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // eslint-disable-next-line no-unused-vars
//   const [error, setError] = useState('')
//   const { createUser } = UserAuth();
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await createUser(email, password);
//       navigate('/account')
//     } catch (e) {
//       setError(e.message);
//       console.log(e.message);
//       alert(e.message);
//     }
//   };

//   return (
//     <div className='bodylogin'>
//       <div id="login-form-wrap">
//         <h2 >Sign up for a free account</h2>

//         <form onSubmit={handleSubmit} id="login-form">
//           <p>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type='email'
//               className='input1'
//               placeholder='Enter Email address'
//               required
//             />
//             <i className="validation">
//               <span></span>
//               <span></span>
//             </i>
//           </p>
//           <p>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             className='input1'
//             placeholder='Enter password'
//             type='password'
//             required
//           />
//               <i className="validation">
//                 <span></span>
//                 <span></span>
//               </i>
//             </p>
//           <p>
//               <input className='input1' type="submit" id="login" value="Login" />
//             </p>
//         </form>
//         <p >
//           Already have an account yet?{' '}
//           <Link to='/signin' className='underline'>
//             Sign in.
//           </Link>
//         </p>
//         <p >
//           If admin then login here{' '}
//           <Link to='/adminLogin' >
//             admin Sign in.
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };


// export default Register;