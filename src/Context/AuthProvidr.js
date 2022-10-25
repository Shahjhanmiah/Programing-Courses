import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth,} from "firebase/auth";

const auth = getAuth(app)
  export const AuthContext = createContext()

const AuthProvidr = ({children}) => {
    const {user,setUser} = useState()

    //  Create user

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
      }
    


    const authInfo = { user,createUser
    }
       
       
      
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};


export default AuthProvidr;