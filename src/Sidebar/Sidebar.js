import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetaillsPage from '../DetailsPage/DetaillsPage';
import RigthSide from '../RigthSIde/RigthSide';

const Sidebar = ({programing}) => {
    const {couress,details,name,id,}=programing
    
    return (
        <div>

          
            
            
       
<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 "data-aos="zoom-in-up"ata-aos-duration="50">
    <div href="#">
        <img className="rounded-t-lg w-full h-80 " src={couress}alt=""/>
    </div>
    <div className="p-5">
        <div href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </div>
        {
            details.length > 200 ?
            <p>{details.slice (0.30) + '...'}
            <Link></Link> </p>
            :

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
        }
        
        <Link to = {`/detailspage/${id}`} >
        <button >
        <div href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </button>
        </Link>
    </div>
</div>

</div>
            
     
    );
};

export default Sidebar;
