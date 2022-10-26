import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, updateUserProfile, getAuth, sendEmailVerification, updateProfile, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,} from "firebase/auth";

const auth = getAuth(app)
  export const AuthContext = createContext()

const AuthProvidr = ({children}) => {
    const {user,setUser} = useState()
    const googleprovider = new  GoogleAuthProvider();

    //  Create user

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
      }

      //  userdisplsy
      const updateUserProfile = (profile) =>{
        return updateUserProfile(auth.currentUser,profile);
    }
    //userdisplay 
    const updateName = name => {
     
      return updateProfile(auth.currentUser, { displayName: name })
    }

    // verifay 
    const verifyEmail= () => {
      return sendEmailVerification(auth.currentUser)
    }

    //  google sigin 
    const signGoogle = ()=>{
      return signInWithPopup(auth,googleprovider)
  }
  // login pasword 
  const signin = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password)
  }

  
    const authInfo = { user,createUser,updateUserProfile,verifyEmail,updateName,signGoogle, signin
    }
       
       
      
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};


export default AuthProvidr;