import './Attributes.css'

import logo from "../../assets/logoNav.png"

function Navbar() {
  return (
    <>
     <nav > 
     <a className = "active" href="/">
     <img src={logo} className ="logoImg" alt="logo"width="140px" height="70px"/>
     </a>
     <div>
      {/* author: Lahu
        I have changed the paths */}
      <ul className="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/learning">Learning Modules</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact Us</a></li>
        {/* <li><a href="/">Book Online</a></li> */}
        {/* <li><a> <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Login
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'Login',
            id: 'uncontrolled-native',
          }}
        >
          <option value={20}>Student</option> 
          <option value={10}>Admin</option>

          
        </NativeSelect>
      </FormControl>
    </Box></a></li> */}
        <li><a href="/auth">Login</a></li>
        <li><a href="/pagenotfound"></a></li>
      </ul>
     </div>
    </nav>
    </>
  )
}

export default Navbar


