import React from 'react';
import { Link } from 'react-router-dom';

const RigthSide = () => {
    return (
        <div>
            

   <div className="  bg-gray-50 rounde bg-amber-500 justify-center m-auto text-2xl h-full p-10">
    <ul>
        <li>
           <Link>
           Python
           </Link>
        </li>
        <li>
           <Link>
           java
           </Link>
        </li>
        <li>
           <Link>
           JavaSxript
           </Link>
        </li>
        <li>
           <Link>
           C
           </Link>
        </li>
        <li>
           <Link>
           C+
           </Link>
        </li>
        <li>
           <Link>
           C#
           </Link>
        </li>
    </ul>
    </div>

    </div>
      
   
    );
};

export default RigthSide;