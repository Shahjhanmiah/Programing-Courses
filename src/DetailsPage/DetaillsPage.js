import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import DetailsShow from '../DetailsShow/DetailsShow';

const DetaillsPage = () => {
    const programing = useLoaderData()
    console.log(programing)
    
    return (
        <div>
            <h2>hellow</h2>
            {
                programing.map(programing=><DetailsShow
                key={programing.id}
                programing={programing}></DetailsShow>)
            }
         

               

        </div>
    );
};

export default DetaillsPage;