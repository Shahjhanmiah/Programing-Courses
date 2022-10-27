import React, { useState,} from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pdf from "react-to-pdf";






const DetailsShow = () => {
    const programing = useLoaderData()
    const ref = React.createRef();
    const {user,serUser} =
     useState()
    console.log(useLoaderData)
    const {couress,details,name,id,}=programing;

         const handleClick  = ()=>{
           
            toast.info('Yes your  courses endorel!',{autoClose:500})


            
    }
   
   
    
    
    return (
        <div>
             <Pdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>
              Downolad to pdf</button>
           
            
        )}
    
    </Pdf>
          
            <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-10 mx-10 justify-end m-auto "ref={ref}>
                
                
                <div href="#">
                    <img class="p-8 rounded-t-lg" src={couress} alt="product image"/>
                </div>
                <div class="px-5 pb-5">
                    <div href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">programing Language :{name}</h5>
                    </div>
                        <p>{details}</p>
                    <div class="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        
                    </div>
                <Link to ='/login'>
                <button onClick={handleClick} >
                    <div class="flex justify-between items-center">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                        <div href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">premium</div>
                    </div>
                    </button>
                </Link>
                </div>
            </div>
            
        </div>
    
        

        
    );
};

export default DetailsShow;