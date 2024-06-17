import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Blogs from './pages/Blogs/Blogs';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/Dashboard';

const router = createBrowserRouter([
  { path: '/', element: <><Navbar /><Home /></> },
  { path: '/login', element: <><Navbar /><Login /></> },
  { path: '/about', element: <><Navbar /><About /></> },
  { path: '/contact', element: <><Navbar /><Contact /></> },
  { path: '/blogs', element: <><Navbar /><Blogs /></> },
  { path: '/signup', element: <><Navbar /><Signup /></> },
  { path: '/dashboard', element: <Dashboard /> },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
