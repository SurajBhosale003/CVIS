
import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth  } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider)
  };
  const logout = async () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
  
    <UserContext.Provider value={{ createUser, user, logout, signIn,googleSignIn  }}>
      {children}
    </UserContext.Provider>
  );
};

export  const UserAuth = () => {
  return useContext(UserContext);
};
