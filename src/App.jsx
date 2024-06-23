import './App.css';
import { createBrowserRouter, RouterProvider,useLocation } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Campaigns from './pages/Campaigns/Campaigns';
import NewCampaign from './pages/Campaigns/NewCampaign';

const router = createBrowserRouter([
  { path: '/', element: <><Navbar  showLogo={true}/><Home /></> },
  { path: '/login', element: <><Navbar showLogo={true}/><Login /></> },
  { path: '/about', element: <><Navbar showLogo={true}/><About /></> },
  { path: '/contact', element: <><Navbar showLogo={true}/><Contact /></> },
  { path: '/blogs', element:<Blogs /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/campaigns', element: <Campaigns /> },
  { path: '/campaign/new', element: <NewCampaign /> },
]);

function App() {

  return (

    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
