import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Blog from './Blog/Blog';
import Login from './Login/Login';
import Register from './Register/Register';



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
          path:'/Courses',
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
        }
        
      ]
    },
    
      
  
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
