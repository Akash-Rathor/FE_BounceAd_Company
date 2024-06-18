import React from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import Sidebar from '../../components/Sidebar';
import Cookies from 'js-cookie';

const Dashboard = () => {

  const data = Cookies.get('user');

  const user = JSON.parse(data)
    
  return (
    <div>
      <Sidebar user={user.name}/>
      <div className='flex flex-1 w-5/6 ml-80'>
        {user.name}
      </div>
    </div>
  )
}

export default Dashboard;