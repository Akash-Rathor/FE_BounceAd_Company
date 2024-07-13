import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function useLogin() {

    const navigate = useNavigate();
  
    const loginUser = async(token,userInfo) => {
      console.log('token,userInfo',token,userInfo)
      Cookies.set('token', token, { expires: 1, secure: false,sameSite: 'Lax' });
      Cookies.set('user', JSON.stringify(userInfo), { expires: 1, secure: false,sameSite: 'Lax' });
      console.log('token and userInfo set in cookies')
      navigate('/dashboard', { state: { userInfo } });
    };
  
    return { loginUser };
  }

  function useLogout() {
    const navigate = useNavigate();
  
    const logoutUser = async() => {
      Cookies.remove('token');
      Cookies.remove('user');
      navigate('/login');
    };
  
    return { logoutUser };
  }



  export { useLogin, useLogout };