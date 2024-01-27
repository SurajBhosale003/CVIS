import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminContext";

import "./logincss.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { handleAdminLogin, isLoggedIn } = useAdminAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await handleAdminLogin(email, password);

      if (isLoggedIn) {
        navigate("/admin/dashboard");
      } else {
        setError("Invalid admin credentials");
      }
    } catch (e) {
      setError(e.message);
      console.error(e.message);
      alert(e.message);
    }
  };

  // console.log(isLoggedIn);
  return (
    <div>
      <div className="login">
        <h1>Admin Sign in</h1>

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
        {error && <p>{error}</p>}
    
        <p>
          Not an admin? <Link to="/">Go to home</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
