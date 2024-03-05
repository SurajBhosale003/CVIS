import "./Attributes.css";
import Logo from "/imgforcollab//collabvision_logo.jpg";

import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  
  return (
    <>
      <nav>
        <a className="active" href="/">
          <img
            src={Logo}
            className="logoImg"
            alt="Collab vision logo"
            height="100px"
          />
        </a>
        <div>
          <ul className="navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/learning">Learning Modules</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
           { !user &&  <a href="/signup">Login</a>}
            {user &&  <button onClick={handleLogout}>Logout</button>}
            </li>
            <li>
              <a href="/pagenotfound"></a>
            </li>

          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
