import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthProvidr from '../Context/AuthProvidr';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthProvidr)
    const location = useLocation();
    if(loading){
        console.log('yes your are a loading')
        return<div>Loading....</div>
    }
    if(!user && user.uid){
        return children;
    }
   
    return (
       
            <Navigate to='/login' state={{from:location}} replace></Navigate>
            
      
    );
};

export default PrivateRoute;