import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/FirebaseConfig";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function Context({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stateClean = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => stateClean();
  }, []);

  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Context;
