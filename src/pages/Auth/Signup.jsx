import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../utility/Auth/Auth';
import Cookies from 'js-cookie';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import signupImage from '../../assets/images/signup.svg';
import useApiCalls from '../../utility/APICalls';
import Loader from '../../common/Loader';
import PopUpAlert from '../../common/Alerts/PopUpAlert';

const Signup = () => {
  const navigate = useNavigate();
  const apicalls = useApiCalls();
  const { loginUser } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [popupHandling, setPopUpHandling] = useState({
    title: 'Registration Error',
    message: '',
    okayText: 'Okay',
    okayColor: 'red-600',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const callApi = async () => {
    setIsLoading(true);
    const payload = { email, mobile: phone, password, name ,user_type:'Company'};
    // console.log('payload',payload)
    try {
      const response = await apicalls('api/register', 'POST', payload);
      const respData = response.data;
      console.log('respData',respData)
      console.log('1',respData.data?.session?.token)
      console.log('2',response.status)
      if (response.status === 201 || response.status === 200) {
        console.log('1 ================',respData.data?.session?.token)
        if (respData.data?.session?.token) {
          console.log('2 ===================',respData.data?.session?.token)
          loginUser(respData.data?.session?.token, respData.data.user);
        } else {
          setPopUpHandling(prev => ({ ...prev, message: respData.msg }));
          setIsVisible(true);
        }
      } else {
        throw new Error(respData.msg);
      }
    } catch (error) {
      setPopUpHandling(prev => ({ ...prev, message: error.message }));
      setIsVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword || !phone || !name) {
      setPopUpHandling(prev => ({ ...prev, message: 'Please fill in all fields.' }));
      setIsVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setPopUpHandling(prev => ({ ...prev, message: 'Passwords do not match.' }));
      setIsVisible(true);
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setPopUpHandling(prev => ({ ...prev, message: 'Phone number must be 10 digits.' }));
      setIsVisible(true);
      return;
    }

    await callApi();
  };

  return (
    <div className='flex flex-col items-center justify-center space-y-2'>
      <Breadcrumb show={false} pageName="Sign In / Sign up" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img src={require('../../assets/images/logo.png')} alt="Logo" />
              </Link>
              <p className="2xl:px-20 text-title-md font-semibold">
                Bring your brand to life with <br /> Ads
              </p>
              <img src={signupImage} alt='signup' className='w-100 mt-15' />
            </div>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="w-full xl:w-1/2">
                <div className="p-4 sm:p-12.5 xl:p-17.5">
                  <span className="block font-medium mb-10">Start for free</span>
                  <form onSubmit={handleSubmit}>
                  {isVisible && (<PopUpAlert
                      title={popupHandling.title}
                      message={popupHandling.message}
                      setIsVisible={setIsVisible}
                      okayText={popupHandling.okayText}
                      okayColor={popupHandling.okayColor}
                      setClickOkay={() => setIsVisible(false)}
                      />)}
                    
                    {!isVisible && <div className="mb-4">
                      <label className="mb-2.5 font-medium">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter full name"
                        className="w-full rounded-lg border py-4 pl-6 pr-10"
                      />
                    </div>}
                    {!isVisible && <div className="mb-4">
                      <label className="mb-2.5 font-medium">Phone Number</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Phone number"
                        className="w-full rounded-lg border py-4 pl-6 pr-10"
                      />
                    </div>}
                    {!isVisible && <div className="mb-4">
                      <label className="mb-2.5 font-medium">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border py-4 pl-6 pr-10"
                      />
                    </div>}
                    {!isVisible && <div className="mb-4">
                      <label className="mb-2.5 font-medium">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full rounded-lg border py-4 pl-6 pr-10"
                      />
                    </div>}
                    {!isVisible && <div className="mb-6">
                      <label className="mb-2.5 font-medium">Confirm Password</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full rounded-lg border py-4 pl-6 pr-10"
                      />
                    </div>}
                    {!isVisible && <div className="flex justify-end">
                      <button
                        type="submit"
                        className="flex h-12 w-full justify-center items-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700"
                      >
                        Sign Up
                      </button>
                    </div>}
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
