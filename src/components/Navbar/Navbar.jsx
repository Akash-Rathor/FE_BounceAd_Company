import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLogout } from '../../utility/Auth/Auth';
import Header from '../Header';

const Navbar = ({showLogo,isLoggedIn ,sidebarOpen,setSidebarOpen}) => {
  
    const [showlogo,setShowLogo] = useState(showLogo);
    
    return (
        <Header showLogo={showlogo} isLoggedIn={isLoggedIn} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    );
};

export default Navbar;
