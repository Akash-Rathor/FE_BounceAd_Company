import React, { useEffect } from 'react';
import './success.css';
import { useNavigate } from 'react-router-dom';

const Success = ({ message, setIsVisible, reDirectTo = '' }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      if (reDirectTo){
        navigate(reDirectTo)
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="success-overlay">
      <div className="success-container flex flex-col flex-wrap justify-center items-center space-x-2 bg-success bg-opacity-10 rounded-md p-2">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
          <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
        <h1 className='mt-5 text-success font-semibold text-center'>{message}</h1>
      </div>
    </div>
  );
};

export default Success;
