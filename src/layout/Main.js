import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
const Main = () => {
  
    return (
        <div>
            
            <Header></Header>
            <Outlet></Outlet>

            
        </div>
    );
};

export default Main;