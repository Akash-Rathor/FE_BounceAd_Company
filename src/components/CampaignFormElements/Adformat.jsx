import React, { useEffect, useState } from 'react';
import CheckBox from '../../common/CheckBox';

const adFormatData = [
  { value: 'Inside Cab Video Ads' },
  { value: 'Outside Cab Print Ads' },
  { value: 'Seat Back Laminated Branding' },
  { value: 'Other Digital Ad ( coming soon )' },
];

const AdFormat = ({ setAdFormat }) => {
  const [selectedAdFormatIndex, setSelectedAdFormatIndex] = useState(null);
  const [message,setMessage] = useState('');
  const [adFormatInternal,setAdFormatInternal] = useState('');

  useEffect(() => {
    const selectedValue = selectedAdFormatIndex !== null ? adFormatData[selectedAdFormatIndex].value : '';
    setAdFormat(selectedValue);
    setAdFormatInternal(selectedValue);
  }, [selectedAdFormatIndex, setAdFormat]);

  const handleCheckboxChange = (index) => {
    setSelectedAdFormatIndex(index === selectedAdFormatIndex ? null : index);
  };


  useEffect(()=>{
    if(adFormatInternal==='Inside Cab Video Ads'){
      setMessage('Video ads can be run instantly and target a more specific audience compared to offline ads such as print ads on cabs. They are more goal-oriented and focused on achieving specific targets.');
    }else if(adFormatInternal==='Outside Cab Print Ads'){
      setMessage('Cab Print Ads helps companies build their brand awareness and display their products or services to a city-wide audience. Cab Advertising is a cost-effective option that offers many benefits such as high visibility to an audience who commutes via road. Cabs spend an average of 10-12 hours on road on a daily basis which improves brand recall.')
    }else if(adFormatInternal==='Seat Back Laminated Branding'){
      setMessage('As part of Seat Back Branding, 2 laminated cards will be hung on the back of the seat, one behind the driver’s seat and another behind the front passenger seat of the cab.')
    }else{
      setMessage('')
    }
  },[adFormatInternal])

  return (
    <>
    <div className='flex flex-col space-y-2 justify-start items-start'>
      {adFormatData.map((item, index) => (
        <CheckBox
          key={index}
          title={item.value}
          index={index}
          isChecked={selectedAdFormatIndex === index}
          onCheckboxChange={() => handleCheckboxChange(index)}
          disabled={item.value === 'Other Digital Ad ( coming soon )'}
        />
      ))}
    </div>
      {message && <div className='bg-green-500 bg-opacity-20 px-2 py-2 mb-5 mt-10 rounded-md text-xs opacity-60'>
        <h1 className='text-green-900'>{message}</h1>
      </div>}
      </>
  );
};

export default AdFormat;
