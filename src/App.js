import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Blog from './Blog/Blog';
import Login from './Login/Login';
import Register from './Register/Register';
import Faq from './Faq/Faq';
import Sidebar from './Sidebar/Sidebar';
import DetaillsPage from './DetailsPage/DetaillsPage';
import Profile from './Profile/Profile';
import DetailsShow from './DetailsShow/DetailsShow';



function App() {
  const  router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/courses',
          loader:()=>fetch('http://localhost:5000/programing'),
          element:<Courses></Courses>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'/faq',
          element:<Faq></Faq>

        },
        {
          path:'/sidebar',
          element:<Sidebar></Sidebar>
        },
        {
           path:'/detailspage/:id',
            // loader:()=>fetch(`http://localhost:5000/programings/1$`),
            loader:({params})=>fetch(`http://localhost:5000/programing/${params.id}`),
    
          
            element:<DetaillsPage></DetaillsPage>
          },
          {
            path:'/profile',
            element:<Profile></Profile>
          },
          {
          path:'/detaillsShow/:id',

          loader:({params})=>fetch(`http://localhost:5000/programing/${params.id}`),
          element:<DetailsShow></DetailsShow>
          }

          
  
        
       

      ]
    },
    
      
  
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
