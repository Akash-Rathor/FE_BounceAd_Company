import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import Alert from '../../common/Alerts/Alert';
import Accordion from '../../common/accordian/Accordian';
import CampaignName from '../../components/CampaignFormElements/CampaignName';
import BidStrategy from '../../components/CampaignFormElements/BidStrategy';
import BudgetDate from '../../components/CampaignFormElements/BudgetDate';
import Location from '../../components/CampaignFormElements/Location';
import Demography from '../../components/CampaignFormElements/Demography';
import Bid from '../../components/CampaignFormElements/Bid';
import Adcatagory from '../../components/CampaignFormElements/Adcatagory';

const NewCampaign = () => {
  const [mcpv, setmCpv] = useState(1.45);
  const [budgeError, setBudgetError] = useState('');
  const [showSkip, setShowSkip] = useState(false);

  // modal fields and methods
  const [isVisible, setIsVisible] = useState(false);
  const [clickOkay, setClickOkay] = useState(false);
  const [modaltitle, setModalTitle] = useState('');
  const [modalMsg, setModalMsg] = useState('Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.');
  const [modalColor, setModalColor] = useState('success');
  const cancelForm = () => {
    setIsVisible(true);
    setModalTitle('Are you sure ? ');
    setModalMsg('Your progress will not be saved, are you sure you want to cancel the campaign ? ');
    setModalColor('warning');
  };
  // modal fields end

  // form fields and methods
  const [campaignName, setCampaignname] = useState('');
  const [bidStrategy, setBidStrategy] = useState('');
  const [budgetAndDates, setBudgetAndDates] = useState({});
  const [budgetDateHeading, setBudgetDateHeading] = useState('');
  const [location, setLocation] = useState('');
  const [demographyDetails, setDemographyDetails] = useState({ age: null, gender: null });
  const [demographyHeading, setDemographyHeading] = useState('');
  const [bid, setBid] = useState('');
  const [adType, setAdType] = useState('');

  useEffect(() => {
    const setbudgetDateHeading = () => {
      if (budgetAndDates.budgetType && budgetAndDates.amount && budgetAndDates.startDate && budgetAndDates.endDate) {
        setBudgetDateHeading(
          `${budgetAndDates.budgetType} | ₹ ${budgetAndDates.amount} | From ${budgetAndDates.startDate} to ${budgetAndDates.endDate}`
        );
      }
    };
    setbudgetDateHeading();
  }, [budgetAndDates]);

  useEffect(() => {
    setDemographyHeading(`Age Group : ${demographyDetails.age} | Gender : ${demographyDetails.gender}`);
  }, [demographyDetails]);


  useEffect(() => {
    console.log('budgetAndDates.budgetType',adType)
    if (adType==='Skippable engaging ads'){
        setShowSkip(true)
    }else{
      setShowSkip(false)
    }
  },[adType])

  const calCulateExpectedBidPrice = (amt,bidAmt) => {
    let val = null;
    if (adType==='Skippable engaging ads'){
      if (!budgetAndDates.budgetType.toLowerCase().includes('daily')){
        if (amt < 5000 && bidAmt < 0.25) {
            val = 0.25;
          } else if (amt < 25000 && bidAmt < 0.25) {
            val = 0.25;
          } else if (amt < 30000 && bidAmt < 0.25) {
            val = 0.25;
          } else if (amt > 30000 && bidAmt < 0.25) {
            val = 0.25;
          }
      }
    }
    if (adType==='Non-Skippable Ads'){
      if (!budgetAndDates.budgetType.toLowerCase().includes('daily')){
        if (amt < 5000 && bidAmt < 0.25) {
            val = 0.25;
          } else if (amt < 25000 && bidAmt < 0.25) {
            val = 0.25;
          } else if (amt < 30000 && bidAmt < 0.25) {
            val = 0.25;
          } else if (amt > 30000 && bidAmt < 0.25) {
            val = 0.25;
          }
        }
    }
    if (adType==='High Engagement Non-Skippable'){
      if (!budgetAndDates.budgetType.toLowerCase().includes('daily')){
        if (amt < 5000 && bidAmt < 25.13) {
            val = 25.13;
          } else if (amt < 25000 && bidAmt < 23.40) {
            val = 23.40;
          } else if (amt < 30000 && bidAmt < 22.22) {
            val = 22.22;
          } else if (amt > 30000 && bidAmt < 21.17) {
            val = 21.17;
          }
    }
  }

    return val;
  }

  useEffect(() => {
    if (!budgetAndDates.amount || budgetAndDates.amount === '') {
      setBudgetError('To check the detailed analysis of your Ad, please fill all the details');
    }else {
      const amt = parseFloat(budgetAndDates.amount);
      const bidAmt = parseFloat(bid);
      const dailyBudget = budgetAndDates.amount;
      let val = calCulateExpectedBidPrice(dailyBudget,bidAmt);
      if (val !== null) {
        setBudgetError(`Your bid might be too low for your campaign settings. You can improve your campaign's potential reach and performance by adjusting your bid to ₹${val}. Suggested based on your budget, campaign duration, targeting criteria, ad format, and estimated auction dynamics.`);
      } else {
        setBudgetError('');
      }
    }
  }, [bid, budgetAndDates]);

  return (
    <DefaultLayout>
      {isVisible ? (
        <Alert
          title={modaltitle}
          message={modalMsg}
          okayText='Okay'
          okayColor={modalColor}
          setClickOkay={setClickOkay}
          setIsVisible={setIsVisible}
        />
      ) : (
        <div className="mx-auto max-w-360">
          <Breadcrumb pageName="Add New Campaign" />
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="flex-1">
              <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-xl">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    New Campaign
                  </h3>
                </div>
                <div className="flex flex-col w-full">
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <Accordion title='Campaign Name' value={campaignName} error={false}>
                      <CampaignName setValueCallback={setCampaignname} />
                    </Accordion>

                    <Accordion title='Bid Strategy' value={bidStrategy} error={false}>
                      <BidStrategy setBidStrategy={setBidStrategy} />
                    </Accordion>

                    <Accordion title='Budget and dates' value={budgetDateHeading} error={false}>
                      <BudgetDate setBudgetAndDates={setBudgetAndDates} />
                    </Accordion>

                    <Accordion title='Locations' value={location} error={false}>
                      <Location setLocation={setLocation} />
                    </Accordion>

                    <Accordion title='Campaign Type' value={adType} error={false}>
                      <Adcatagory setAdType={setAdType} />
                    </Accordion>

                    <Accordion title='People you want to reach' value={demographyHeading} error={false}>
                      <Demography setDemographyDetails={setDemographyDetails} />
                    </Accordion>

                    <Accordion title='Bid' value={`₹ ${bid}`} error={false}>
                      <Bid setBid={setBid} adType={adType} />
                    </Accordion>

                    <div className="flex justify-end m-2 space-x-5">
                      <button
                        className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                        onClick={cancelForm}
                        type="button"
                      >
                        Cancel
                      </button>
                      <button
                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex-1 xl:flex-none xl:w-1/3">
              <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-3xl">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Your Advertisement
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto relative p-1">
                  {showSkip && (
                    <div className='absolute right-2 top-45 bg-slate-500 bg-opacity-30 w-20 h-12 flex justify-center items-center rounded-l-lg text-white'>
                      Skip Ad
                    </div>
                  )}
                  <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)' }}></div>
                  <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 justify-center flex flex-col space-y-2 my-5">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
                    <button className="flex items-center justify-center py-2 bg-gray-200 dark:bg-gray-700 bg-slate-400 hover:bg-green-800 rounded-lg mx-10">
                      <svg className="w-5 h-5 text-gray-800 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
                      </svg>
                      <h1 className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Upload Video</h1>
                    </button>
                    {budgeError ? (
                      <div className='flex flex-row justify-center items-center bg-red-600 bg-opacity-30 py-1 px-4'>
                        <h1 className='text-sm text-red-600'>{budgeError}</h1>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700 space-x-2">
                          <span style={{ fontSize: 12, color: 'green' }}>Based on your campaign settings but not your budget or bid </span>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700 space-x-2">
                          <span className="font-normal text-gray-800 dark:text-gray-200">Impressions </span>
                          <span className="font-normal text-gray-800 dark:text-gray-200">30M </span>
                        </div>
                        <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700 space-x-2">
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667" />
                          </svg>
                          <h4 className="py-2 font-normal tracking-wide text-blue-800 text-center text-gray-800 uppercase dark:text-white">Your estimated performance</h4>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700 space-x-2">
                          <div className='flex flex-col justify-between items-start space-y-5'>
                            <div className='flex flex-col justify-center items-start'>
                              <h3 className='text-sm'>Views</h3>
                              <h3>1k - 4k</h3>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                              <h3 className='text-sm'>Average CPV</h3>
                              <div className='flex flex-row justify-center items-center'>
                                <span>₹ 0.25</span>
                                <span className='px-1'> - </span>
                                <span> ₹ 0.65</span>
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-col justify-between items-start space-y-5'>
                            <div className='flex flex-col justify-center items-start'>
                              <h3 className='text-sm'>Impressions</h3>
                              <h3>3k - 3.5k</h3>
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                              <h3 className='text-sm'>Budget Spend</h3>
                              <div className='flex flex-row justify-center items-center'>
                                <span>95% - 100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default NewCampaign;
