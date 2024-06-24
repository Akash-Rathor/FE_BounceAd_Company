import LoadingSpiral from '../../assets/images/loader.svg';

const Loader = () => {
  return (
    <div className="flex h-full items-center justify-center bg-white my-10">
      {/* <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
       */}
       <img src={LoadingSpiral} alt='loader' />
    </div>
  );
};

export default Loader;
