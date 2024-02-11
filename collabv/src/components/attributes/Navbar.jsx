

import "./Attributes.css";
import Logo from "/imgforcollab//collabvision_logo.jpg";

function Navbar() {
   
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
                <a href="/signup">Login</a>
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

