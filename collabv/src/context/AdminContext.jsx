
import { createContext, useContext, useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAdminLogin = async (email) => {
    const admins = [];

    try {
      const adminsRef = collection(db, "adminCredentials");
      const querySnapshot = await getDocs(adminsRef);

      querySnapshot.forEach((doc) => {
        let data = doc.data();
        admins.push(data);
      });

      const isAdminFromData = admins.find((admin) => admin.email === email);
      setIsAdmin(!!isAdminFromData);
    } catch (error) {
      console.error("Error fetching admin document:", error);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        handleAdminLogin(authUser.email);
        setIsLoggedIn(true);
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

