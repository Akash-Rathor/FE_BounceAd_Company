import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLogout } from '../../utility/Auth/Auth';
import Header from '../Header';

const Navbar = ({showLogo,isLoggedIn ,sidebarOpen,setSidebarOpen,user={}}) => {
  
    const [isLoggedInUser,setIsLoggedInUser] = useState(isLoggedIn);
    const [loggedInUserInfo,setLoggedInUserInfo] = useState(user);

    useEffect(() => {
        const token = Cookies.get('token');
        const u = Cookies.get('user');

        if(token && u){
            const parsed_User = JSON.parse(u)
            setIsLoggedInUser(true)
            setLoggedInUserInfo(parsed_User);
        }else{
            setIsLoggedInUser(false)
        }

    },[])

    const [showlogo,setShowLogo] = useState(showLogo);
    
    return (
        <Header showLogo={showlogo} isLoggedIn={isLoggedInUser} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} user={loggedInUserInfo}/>
    );
};

export default Navbar;
