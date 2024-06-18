import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useGoogleLogin,googleLogout } from '@react-oauth/google';
import {useLogin} from '../../utility/Auth/Auth';
import axios from 'axios';

const Signup = () => {

  const { loginUser } = useLogin();

  const fetchUserInfo = async (accessToken) => {
    try {
      const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log('Error fetching user info:', error);
      return null;
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await fetchUserInfo(tokenResponse.access_token);
      loginUser(tokenResponse, userInfo);
      console.log('I am inside page > auth > signup')
      // console.log('Login Success:', tokenResponse)
      // console.log('Login Success:', userInfo)
    },
    onError: (error) => console.log('Login Error:', error),
  });


  const signInWithGoogle = () => {
    googleLogout();
    login();
  };;

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src={require('../../assets/images/logo.png')} alt="BounceAd" style={{ width: 70, height: 70 }} />
        <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Re-Enter Password</label>
              <div class="text-sm">
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-blue hover:ring-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lightblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>
          </div>

        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Already have account ?
          <Link to="/login" class="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-blue" >Login</Link>
        </p>
        <div style={{ justifyContent: 'center', marginTop: 20 }} className='flex flex-col justify-center items-center'>
          <div style={{ width: '100%', height: 1, backgroundColor: 'gray', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 5 }} />
          <p className='bg-white -mt-3 px-5'>Or continue with</p>
          <button className='flex bg-blue rounded-full px-5 py-2 justify-center items-center space-x-2 mt-5' onClick={() => signInWithGoogle()}>
            <img class="mx-auto h-10 w-auto" src={require('../../assets/images/google.png')} alt="BounceAd" style={{ width: 30, height: 30 }} />
            <p className='text-white font-base'>Sign up with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;