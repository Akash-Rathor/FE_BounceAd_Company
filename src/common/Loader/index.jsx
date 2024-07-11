import LoadingSpiral from '../../assets/images/loader.svg';
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-0 z-50">
      <div className="absolute inset-0 bg-transparent bg-opacity-90 pointer-events-none"></div>
      <img src={LoadingSpiral} alt='loader' className="animate-spin rounded-full border-4 p-2 border-solid border-blue-600 border-t-transparent" />
    </div>
  );
};

export default Loader;
