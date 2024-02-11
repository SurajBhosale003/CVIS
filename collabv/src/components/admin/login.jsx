import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/googleLogo.jpeg";
import { UserAuth } from "../../context/AuthContext";

import "./logincss.css";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      alert(e.message);
      setError(e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      if (user != null) {
        navigate("/account");
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div>
      <div className="login">
        <h1>Sign in to your account</h1>

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
          <button>Sign In</button>
        </form>

        <div className="googleSignin">
          <p onClick={handleGoogleSignIn}>
            <button>
              <img src={googleLogo} alt="googleLogo" />
              Sign in with Google
            </button>
          </p>
        </div>
        <p>
          Do not have an account yet? <Link to="/signup">Sign up.</Link>
        </p>
        <p>
          If admin then login here <Link to="/AdminLogin">admin Sign in.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
