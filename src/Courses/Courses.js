import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RigthSide from '../RigthSIde/RigthSide';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
 const programing = useLoaderData()
 console.log()
 const handleClick  = ()=>{

 }
    return (
     
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-4  mb-8 lg:grid-cols-3 translate-x-24'>
      <RigthSide></RigthSide>
  
            {
                programing.map(programing=><Sidebar key={programing.id}
                programing={programing}
                handleClick={handleClick}

              >

                </Sidebar>)
            }
           
            </div>
           
           
        </div>
        
    );
};

export default Courses;