import React from 'react';
import Cookies from 'js-cookie';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../components/sidebar.css';

const Dashboard = () => {
  const data = Cookies.get('user');
  const user = JSON.parse(data);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar user={user.name} />
        <div className="content">
          {user.name}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
