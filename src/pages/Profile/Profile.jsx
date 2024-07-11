import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import CheckBox from '../../common/CheckBox';

const Profile = () => {

  const [phoneLocalState, setPhoneLocalState] = useState('');
  const [data, setData] = useState({});
  const [message, setMessage] = useState('');

  const updateValue = (key, val) => {
    // console.log('data', key, val, data);
    setData((prev) => ({
      ...prev,
      [key]: val,
    }));
    console.log('data', key, val, data);
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateValue('picture', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const u = Cookies.get('user');
    setData(JSON.parse(u))
    console.log(JSON.parse(u));
  }, [])

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneLocalState(value); // Update local state for validation
      setMessage('');
    } else {
      setMessage('Phone number must be 10 digits.');
    }
  };
  
  useEffect(() => {
    if (phoneLocalState !== '') {
      updateValue('mobile', phoneLocalState); // Update global state after validation
    }
  }, [phoneLocalState]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', data);
  };

  return (
    <DefaultLayout >

      <Breadcrumb pageName="Profile" />
      <div className="flex flex-col justify-evenly items-center border-stroke lg:flex-row-reverse">
        <form className='flex justify-center items-center' onSubmit={handleSubmit}>
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5 flex flex-col space-y-2 justify-center items-center">
            <div className='flex-col relative lg:hidden'>
              <img src={data.picture} alt='profile' className='w-50 h-50 rounded-full self-center mb-10' />
              <button className='absolute right-5 bottom-10 p-2 rounded-full bg-yellow-400 w-10' onClick={() => document.getElementById('fileInput').click()}>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clip-rule="evenodd" />
                </svg>
                <input
                id="fileInput"
                type="file"
                style={{ display: 'none' }}
                onChange={uploadImage}
              />
              </button>
            </div>
            <div>
              <div className="mb-4">
                <div className='flex flex-row justify-between mb-4 space-x-1'>
                  <div className='flex flex-col'>
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => updateValue('name', e.target.value)}
                        placeholder="Enter full name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <span className="absolute right-4 top-4">
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4 text-gray-4">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                        </svg>

                      </span>
                      <input
                        type="text"
                        value={data.phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter Phone number"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-12 pr-4 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => updateValue('email', e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  <span className="absolute right-4 top-4">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Industry
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={data.industry}
                    onChange={(e) => updateValue('industry', e.target.value)}
                    placeholder="Marketing and Advertisement"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  <span className="absolute right-4 top-4 opacity-40">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
                    </svg>

                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Website
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={data.website}
                    onChange={(e) => updateValue('website', e.target.value)}
                    placeholder="https://bouncead.com"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  <span className="absolute right-4 top-4 opacity-40">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                  </span>
                </div>
              </div>
              {message && <div className="mb-6 bg-danger bg-opacity-30 rounded-md px-5">
                <label className="mb-2.5 block font-sm text-danger">
                  {message}
                </label>
              </div>}
              <div className="mb-5">
                <input
                  type="submit"
                  value="Save"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
              </div>

            </div>
            <div className="flex spce-x-5 mt-6 text-center">
                <CheckBox title="Receive promotion, offers and cummunications from us. God promise, we'll not spam you"
                onCheckboxChange={() => updateValue('isPromotionChecked',!data.isPromotionChecked)}
                isChecked={data.isPromotionChecked}
                disabled={false}
                />
            </div>
          </div>
        </form>
        <div className='hidden justify-center items-center lg:block'>
          <div className='flex flex-col relative'>
            <img src={data.picture} alt='profile' className='w-100 h-100 rounded-md self-center mb-10' />
            <button className='absolute right-1 bottom-11 p-2 rounded-md bg-yellow-400 w-10' onClick={() => document.getElementById('fileInput').click()}>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clip-rule="evenodd" />
              </svg>
              <input
                id="fileInput"
                type="file"
                style={{ display: 'none' }}
                onChange={uploadImage}
              />
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Profile;