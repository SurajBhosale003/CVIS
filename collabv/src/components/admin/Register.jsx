import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo  from "../../assets/googleLogo.jpeg"


import { UserAuth } from "../../context/AuthContext";


import "./logincss.css";

const Register = () => {
  const { googleSignIn ,user } = UserAuth();

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
      alert("trying to login...");
      navigate("/account");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      alert("trying to login...");
    } catch (error) {
      alert(error);
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
        <div className="googleSignin">
          <p onClick={handleGoogleSignIn}>
          <button>
            <img src={googleLogo} alt="googleLogo" />
          
            Sign in with Google</button>
          </p>
        </div>
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
