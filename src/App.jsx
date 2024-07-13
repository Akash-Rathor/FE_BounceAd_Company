import './App.css';
import { createBrowserRouter, RouterProvider,useLocation } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Campaigns from './pages/Campaigns/Campaigns';
import NewCampaign from './pages/Campaigns/NewCampaign';
import Signup from './pages/Auth/Signup';
import EditCampaign from './pages/Campaigns/EditCampaign';
import BillingHistory from './pages/Billing/BillingHistory';


const router = createBrowserRouter([
  { path: '/', element: <><Navbar  showLogo={true}/><Home /></> },
  { path: '/login', element: <><Navbar showLogo={true}/><Login /></> },
  { path: '/signup', element: <><Navbar showLogo={true}/><Signup /></> },
  { path: '/Profile', element:<Profile /> },
  { path: '/contact', element: <><Navbar showLogo={true}/><Contact /></> },
  { path: '/blogs', element:<Blogs /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/campaigns', element: <Campaigns /> },
  { path: '/campaign/new', element: <NewCampaign /> },
  { path: '/campaign/Edit/:name', element: <EditCampaign /> },
  { path: '/billings', element: <BillingHistory /> },
]);

function App() {

  return (

    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
