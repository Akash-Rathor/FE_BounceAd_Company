import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function useLogin(token, userInfo) {
    const navigate = useNavigate();
  
    const loginUser = () => {
      Cookies.set('token', token, { expires: 1, secure: true });
      Cookies.set('user', userInfo, { expires: 1, secure: true });
      navigate('/dashboard', { state: { userInfo } });
    };
  
    return { loginUser };
  }

  function useLogout() {
    const navigate = useNavigate();
  
    const logoutUser = () => {
      Cookies.remove('token');
      Cookies.remove('user');
      navigate('/login');
    };
  
    return { logoutUser };
  }



  export { useLogin, useLogout };