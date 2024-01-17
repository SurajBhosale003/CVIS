
import {  useState } from "react";
import { db } from "./Firebase";
import { auth } from "./Firebase.js";
// import 'firebase/auth';
import { getDocs, collection } from "firebase/firestore";
import './logincss.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

const AdminLogin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleAdminLogin = async (email) => {
    const users = [];

    try {
      const adminsRef = await getDocs(collection(db, "adminCredentials"));
      console.log(email);
      adminsRef.forEach((doc) => {
        let data = doc.data();
        users.push(data);
      });

      console.log(users);
      const isAdminFromData = users.find((user)=>user.email===email);
      if (isAdminFromData) {
        setIsAdmin(true);
      } else {
        console.log("Admin document does not exist!");
        setIsAdmin(false);
      }
    } catch (error) {
      console.error("Error fetching admin document:", error);
      setIsAdmin(false);
    }
  };

  return (
    <div>
      <div id="login-form-wrap">
        <h2>Admin Login</h2>
        <form
          id="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          <p>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              value={credentials.email}
              onChange={handleChange}
            />
            <i className="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
              value={credentials.password}
              onChange={handleChange}
            />
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
};

export default AdminLogin;
