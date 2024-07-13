import React from 'react'
import DragNdrop from '../../../common/draganddrop/DragNdrop';
import VideoAd from './Adtypes/VideoAd';
import ImpressionValue from './ImpressionValue';
import SeatBackLaminated from './Adtypes/SeatBackLaminated';
import CarCover from './Adtypes/CarCover';

const YourAd = ({ showSkip, fileUrl, setUploadedFile, campaignName, budgeError = null, cancelForm, submitForm, adFormat,edit=false }) => {


  const submitform = () => {
    submitForm();
  }

  // console.log('showSkip', showSkip)
  return (
    <div className="flex-1 xl:flex-none xl:w-1/3">
      <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-3xl">
        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Your Advertisement
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto relative p-1">
          {showSkip && (
            <div className='absolute right-1 top-45 bg-slate-500 z-99 bg-opacity-30 w-20 h-12 flex justify-center items-center rounded-l-lg text-white'>
              Skip Ad
            </div>
          )}
          {/* {adFormat && <h1 className='text-success bg-success bg-opacity-10 px-2 rounded-md my-2'>This is how your ad will look</h1>} */}
          {adFormat && <h1 className='text-success bg-warning bg-opacity-10 px-2 rounded-md my-2'>{adFormat === 'Inside Cab Video Ads' ? 'This is how your ad will look' : 'Example Ad'}</h1>}

            {/*  video ad */}
          {adFormat === 'Inside Cab Video Ads' && <VideoAd fileUrl={fileUrl}/>}
          {adFormat === 'Seat Back Laminated Branding' && <SeatBackLaminated fileUrl={fileUrl}/>}
          {adFormat === 'Outside Cab Print Ads' && <CarCover fileUrl={fileUrl}/>}
            {/* laminated seat back ad */}

            {/* Outer seat cover ad */}

          <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 justify-center flex flex-col space-y-2 my-5">
            {!edit && <DragNdrop onFilesSelected={setUploadedFile} adFormat={adFormat} />}
            <h3 className="font-bold tracking-wide text-center text-gray-800 dark:text-white">{campaignName}</h3>
            <ImpressionValue budgeError={budgeError} />
          </div>

          <div className="flex justify-end m-2 space-x-5">
            {edit ? 
            <button className="flex justify-center bg-red-600 rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark" onClick={cancelForm} type="button" >Pause Ad</button>
            :
            <button className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white" onClick={cancelForm} type="button" >Cancel</button>
            }
            <button className="flex justify-center rounded bg-opacity-90 bg-primary py-2 px-6 font-bold  text-white hover:bg-opacity-100" type="submit" onClick={submitform}>Save</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default YourAd