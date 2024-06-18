import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLogout } from '../../utility/Auth/Auth';


const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const { logoutUser } = useLogout();
    const [user,setUser] = useState({})

    const token = Cookies.get('token');

    const logout = () => {
        logoutUser();
        setSignedIn(false);
    }

    useEffect(() =>{
        if(token){
            setSignedIn(true)
            const data = Cookies.get('user');
            const userinfo = JSON.parse(data)
            console.log(userinfo)
            setUser(userinfo);
        }
    },[token])

    const setVisible = () => {
        setIsVisible(prev => !prev)
    }
    return (
        <nav class="bg-white shadow-md">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>

                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:justify-start sm:items-center">
                        <Link to='/'><div class="flex flex-shrink-0 items-center">
                            <img class="h-12 w-auto" src={require('../../assets/images/logo.png')} alt="BounceAd" />
                        </div>
                        </Link>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                {signedIn && <Link to="/dashboard" class="rounded-md px-3 py-2 text-md font-semibold text-black hover:text-white hover:bg-lightblue hover:ring-2" aria-current="page">Dashboard</Link>}
                                <Link to="/about" class="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-gray-700 hover:text-white hover:bg-lightblue hover:ring-2">About</Link>
                                <Link to="/blogs" class="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-gray-700 hover:text-white hover:bg-lightblue hover:ring-2">Blogs</Link>
                                <Link to="/contact" class="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-gray-700 hover:text-white hover:bg-lightblue hover:ring-2">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">View notifications</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                                
                            </button> */}

                        <div class="relative ml-3">
                            {!signedIn && <Link to='/login' class="rounded-xl bg-blue px-8 py-3 text-md font-medium text-white hover:ring-2 " aria-current="page">Sign In</Link>}

                            {signedIn && <div onClick={setVisible}>
                                <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:ring-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="absolute -inset-1.5"></span>
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full" src={user.picture} alt="profile pic" />
                                </button>
                            </div>}

                            {signedIn && <div hidden={!isVisible} class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" >
                                <buttom onClick={logout} class="block px-4 py-2 text-md text-gray-700 hover:bg-cream hover:cursor-pointer" role="menuitem" tabindex="-1" id="user-menu-item-2">{user.given_name}'s Profile</buttom>
                                <buttom onClick={logout} class="block px-4 py-2 text-md text-gray-700 hover:bg-cream hover:cursor-pointer" role="menuitem" tabindex="-1" id="user-menu-item-2">Settings</buttom>
                                <buttom onClick={logout} class="block px-4 py-2 text-md text-gray-700 hover:bg-cream hover:cursor-pointer" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</buttom>
                            </div>}

                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    {signedIn && <Link to="/dashboard" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</Link>}
                    <Link to="/about" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-lightblue">About</Link>
                    <Link to="/blogs" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-lightblue">Blogs</Link>
                    <Link to="/contact" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700  hover:text-lightblue">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
