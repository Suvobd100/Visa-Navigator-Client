import { createContext, useEffect, useState } from "react";
// manual copy from
// https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../firebase/firebase.config";
import { toast } from "react-toastify";

// global value(auth,AuthContext)
export const AuthContext = createContext();
// firebase auth call
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // register user value see
  //   console.log("AuthProvider---", user);

  // like a time out
  const [loading, setLoading] = useState(true);

  // google provider for login with google
  const googleProvider = new GoogleAuthProvider();

  // new user fun by help of firebase keyword
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handelGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
    // console.log(user);
  };
  const logOut = () => {
    setLoading(true);
    toast.success("Logout successfully done!");
    return signOut(auth);
  };

  // for create observer to see the user activity
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    handelGoogleLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
