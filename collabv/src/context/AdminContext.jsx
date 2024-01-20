

import { createContext, useContext, useEffect, useState } from 'react';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAdminLogin = async (email, password) => {
    try {
      const adminsRef = collection(db, "adminCredentials");
      const q = query(adminsRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const adminData = querySnapshot.docs[0].data();
        console.log("Password fetched from the database:", adminData.password);
        console.log("email fetched from the database:", adminData.email);

        if (adminData.password === password) {
          setIsAdmin(true);
          setIsLoggedIn(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.error("Error fetching admin document:", error);
      setIsAdmin(false);
    }
  };
  
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        await handleAdminLogin(authUser.email , authUser.password);
        setIsLoggedIn(true);
        if (!isAdmin) {
          setIsAdmin(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    });
  
    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, isLoggedIn, handleAdminLogin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminAuth = () => {
  return useContext(AdminContext);
};
