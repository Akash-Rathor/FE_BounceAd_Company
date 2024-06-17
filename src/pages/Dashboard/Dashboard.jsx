import React from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const Dashboard = () => {

    googleLogout();
    
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;