import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoole } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvidr';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const location  = useLocation();
    const { signGoogle,signin} = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target);
    
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)

      signin(email, password)
      .then(result => {
        toast.success('Login Success!')
       
        console.log(result.user)
        navigate(from,{replace:true})
      })
      .catch(error => toast.error(error.message))
  }
     
       
    
        
            
      

    const handelGoogleSign =()=>{
        signGoogle()
        .then(result=>{
            console.log(result.user);

        })
    }
    return (
        <div>

            <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8  dark:bg-gray-800 dark:border-gray-700 justify-center my-10 m-auto">
                <form onSubmit={handleSubmit} class="space-y-6">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in </h5>
                    <div>
                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        < div href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forget Password?</div>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <Link to='/register' className='hover:underline text-gray-600'>
                        Sign up
                    </Link>
                </form>

                <button onClick={ handelGoogleSign} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <span className='caret-emerald-900 gap-4'><i class="fa-brands fa-google "></i></span> Google your account</button>


                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-36"> <span><i class="fa-brands fa-github gap-10"></i></span> Github your account</button>

            </div>


        </div>
    );
};

export default Login;