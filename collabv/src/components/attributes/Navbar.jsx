import './Attributes.css'
import logo from "../../assets/logoNav.png"

function Navbar() {
  return (
    <>
    <nav>
     <a className = "active" href="/">
     <img src={logo} className ="logoImg" alt="logo"width="140px" height="70px"/>
     </a>
     <div>
      <ul id="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/">Learning Modules</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">Book Online</a></li>
        <li><a href="/"></a></li>
      </ul>
     </div>
    </nav>
    </>
  )
}

export default Navbar