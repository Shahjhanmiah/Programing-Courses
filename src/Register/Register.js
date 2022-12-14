import { getAuth } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvidr';
import app from '../Firebase/Firebase.init';
const auth = getAuth(app)

const Register = () => {
    const navigate = useNavigate()
    
    const {createUser, updateName,verifayEmail, updateUserProfile} = useContext(AuthContext)
   
    const handleSubmit = event => {
        event.preventDefault()
        console.log(event.target.email);
        
    
    
        const name = event.target.name.value
        // const photoURL = event.targer.photoURL.value;
        const email = event.target.email.value
        const password = event.target.password.value
    
        //1. Create Account
        createUser(email, password)
          .then(result => {
            console.log(result.user)
            navigate('/login')


            // user profiel
            const handleUpdateUserProfile = (name,photoURL)=>{
                const profile = {
                    displaName: name,
                    photoURL: photoURL
        
                }
                updateUserProfile(profile)
                .then(()=>{})
                .catch(error=>console.error(error));
            }
    
            //2. Update Name
            updateName(name)
              .then(() => {
                toast.success('Name Updated')
    
                //3. Email verification
                
              })
              .catch(error => {
                toast.error(error.message)
              })
              verifayEmail()
                  .then(() => {
                    toast.success('Please check your email for verification link')
                   
                  })
                  .catch(error => {
                    toast.error(error.message)
                  })
          })
          
          
          
      }
   
        
    return (
        <div>

            <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8  dark:bg-gray-800 dark:border-gray-700 justify-center my-10 m-auto">
                <form onSubmit={handleSubmit} class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign up </h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                        <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your photourl</label>
                        <input type="photourl" name="photourl" id="photoulr" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="????????????????????????" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <div href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forget Password?</div>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <Link to='/login' className='hover:underline text-gray-600'>
                        Sign up
                    </Link>
                </form>

                

            </div>


        </div>
    );
};

export default Register;
