import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import DetailsShow from '../DetailsShow/DetailsShow';

const DetaillsPage = () => {
   const programing = useLoaderData(); 
   console.log(programing);
   const {couress,details,name,id}=programing;
  
  
    return (
        <div>
           
<div href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10 mx-10">
    <img class="object-cover w-full h-40 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg w-full" src={couress} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> programing Language:{name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
        <Link to={`/detaillsShow/${id}`} >
        <button >
        <div href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cheak 
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </button>
        </Link>
    </div>
</div>

          




        </div>
    );
};

export default DetaillsPage;