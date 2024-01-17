import { Outlet } from "react-router-dom";
// import  { useState, useEffect } from 'react';


const PrivateRouts =()=> {

    // const [isLoggedIn, setisLoggedIn] = useState('');



  let loggedIn = false;

  if(loggedIn){
    return <Outlet/>
  }
  else {
    return "user is not logged in";
  }

}

export default PrivateRouts

