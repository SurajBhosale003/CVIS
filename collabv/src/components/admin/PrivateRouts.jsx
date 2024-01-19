import { Outlet } from "react-router-dom";
import  { useContext } from 'react';
import AdminContext from '../../context/Admincontext';

// import  { useState, useEffect } from 'react';


const PrivateRouts =()=> {

    // const [isLoggedIn, setisLoggedIn] = useState('');

    const {isAdmin,isLoggedIn}=useContext(AdminContext);


  if(isAdmin && isLoggedIn ){
    return <Outlet/>
  }
  else {
    return "user is not logged in";
  }

}

export default PrivateRouts

