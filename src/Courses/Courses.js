import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
 const programing = useLoaderData()
 console.log(programing)
    
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-4 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-4 w-full'>
            {
                programing.map(programing=><Sidebar key={programing.id}
                programing={programing}>

                </Sidebar>)
            }
            </div>
           
           
        </div>
        
    );
};

export default Courses;