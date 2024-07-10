import React, { useState, useEffect, useCallback } from 'react';
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
import YourAd from '../../components/CampaignFormElements/YourAd/YourAd';
import Adformat from '../../components/CampaignFormElements/Adformat';


const NewCampaign = () => {
  // const [mcpv, setmCpv] = useState(1.45);
  // const [budgeError, setBudgetError] = useState('');
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
    setModalColor('red-600');
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
  const [uploadedFile, setUploadedFile] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [adFormat, setAdFormat] = useState('');

  useEffect(() => {
    console.log('bidStrategy',bidStrategy,budgetAndDates)
    const setbudgetDateHeading = () => {
      if (
        bidStrategy === 'Maximum CPV' &&
        budgetAndDates.budgetType &&
        budgetAndDates.amount &&
        budgetAndDates.startDate &&
        budgetAndDates.endDate
      ) {
        setBudgetDateHeading(
          `Budget type : ${budgetAndDates.budgetType} | ₹ ${budgetAndDates.amount} | From ${budgetAndDates.startDate} to ${budgetAndDates.endDate}`
        );
      } else if (bidStrategy === 'Minimum Count' && budgetAndDates.startDate) {
        setBudgetDateHeading(
          `Months : ${budgetAndDates.months} | Cabs : ${budgetAndDates.cabs} | From ${budgetAndDates.startDate} | ₹ ${budgetAndDates.amount}`
        );
      } else {
        setBudgetDateHeading('');
      }
    };

    setbudgetDateHeading();
  }, [budgetAndDates, bidStrategy]);

  useEffect(() => {
    setDemographyHeading(`Age Group : ${demographyDetails.age} | Gender : ${demographyDetails.gender}`);
  }, [demographyDetails]);


  useEffect(() => {
    console.log('budgetAndDates.budgetType', adType)
    if (adType === 'Skippable engaging ads') {
      setShowSkip(true)
    } else {
      setShowSkip(false)
    }
  }, [adType])

  useEffect(() => {
    let videoUrl = '';
    if (uploadedFile instanceof Blob) {
      videoUrl = URL.createObjectURL(uploadedFile);
    }
    setVideoUrl(videoUrl);
  }, [uploadedFile]);

  // form fields and methods end


  // submit form
  const submitForm = () => {
    console.log('Submit form clicked')
  }
  //  submit form end

  return (
    <DefaultLayout>
      {isVisible &&
        <Alert
          title={modaltitle}
          message={modalMsg}
          okayText='Okay'
          okayColor={modalColor}
          setClickOkay={setClickOkay}
          setIsVisible={setIsVisible}
        />}
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

                    {campaignName && <Accordion title='Ad Format' value={adFormat} error={false}>
                      <Adformat setAdFormat={setAdFormat} />
                    </Accordion>}

                    {adFormat &&
                      <Accordion title='Bid Strategy' value={bidStrategy} error={false}>
                        <BidStrategy setBidStrategy={setBidStrategy} adFormat={adFormat} />
                      </Accordion>}

                    {adFormat && <Accordion title='Budget and dates' value={budgetDateHeading} error={false}>
                      <BudgetDate setBudgetAndDates={setBudgetAndDates} bidStrategy={bidStrategy} />
                    </Accordion>}

                    {budgetDateHeading && <Accordion title='Locations' value={location} error={false}>
                      <Location setLocation={setLocation} />
                    </Accordion>}

                    {location && adFormat === 'Inside Cab Video Ads' && <Accordion title='Campaign Type' value={adType} error={false}>
                      <Adcatagory setAdType={setAdType} adFormat={adFormat} />
                    </Accordion>}

                    {adType && adFormat === 'Inside Cab Video Ads' && <Accordion title='People you want to reach' value={demographyHeading} error={false}>
                      <Demography setDemographyDetails={setDemographyDetails} />
                    </Accordion>}

                    {(demographyDetails.age || demographyDetails.gender) && <Accordion title='Bid' value={`₹ ${bid}`} error={false}>
                      <Bid setBid={setBid} adType={adType} budgetAndDates={budgetAndDates} />
                    </Accordion>
                    }
                  </form>
                </div>
              </div>
            </div>

            <YourAd
              showSkip={showSkip}
              videoUrl={videoUrl}
              setUploadedFile={setUploadedFile}
              campaignName={campaignName}
              // budgeError={budgeError}
              cancelForm={cancelForm}
              submitForm={submitForm}
              adFormat = {adFormat}
            />

          </div>
        </div>
    </DefaultLayout>
  );
};

export default NewCampaign;
