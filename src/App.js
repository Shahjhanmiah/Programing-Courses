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
import ErrorPage from './ErrorPage/ErrorPage';
import PrivateRoute from './ContextPrivate/PrivateRoute';



function App() {
  const  router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/courses',
          loader:()=>fetch('https://server-site-pearl.vercel.app/programing'),
          element:<PrivateRoute><Courses></Courses></PrivateRoute>
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
            // loader:()=>fetch(`https://server-site-pearl.vercel.app/programings/1$`),
            loader:({params})=>fetch(`https://server-site-pearl.vercel.app/programing/${params.id}`),
    
          
            element:<DetaillsPage></DetaillsPage>
          },
          {
            path:'/profile',
            element:<Profile></Profile>
          },
          {
          path:'/detaillsShow/:id',

          loader:({params})=>fetch(`https://server-site-pearl.vercel.app/programing/${params.id}`),
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
