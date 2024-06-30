import React, { useState } from 'react';
import SkipAbleAD from '../../images/product/Skip_Ad.png';
import NonSkipAbleAD from '../../images/product/non_Skip_Ad.png';

const Adcatagory = ({ setAdType }) => {
    const [selectedType, setSelectedType] = useState('');

    const handleAdTypeChange = (type) => {
        setSelectedType(type);
        setAdType(type);
    };

    return (
        <div className='flex flex-row flex-wrap justify-evenly items-center space-x-2 gap-1'>
            <button
                className={`flex flex-col justify-center items-center w-full md:w-1/3 h-50 px-2 border-2 border-slate-400 rounded-lg ${selectedType === 'High Engagement Non-Skippable' ? 'border-green-500 bg-gray-200' : 'opacity-60'} `}
                onClick={() => handleAdTypeChange('High Engagement Non-Skippable')}>
                <h2 className='p-2' style={{ fontSize: 14,fontWeight:800 }}>High Engagement Ads</h2>
                <div className='flex flex-row justify-center items-center '>
                    <img src={NonSkipAbleAD} alt='non - skipable ad' className='w-16 h-16 self-start opacity-70 mr-2' />
                    <p style={{ fontSize: 12 }} className='bg-warning p-1 rounded-md bg-opacity-20 text-justify text-warning'>
                        These ads offer superior engagement and visibility, strategically placed first before any other ads. They are non-skippable and drive better audience reach and superior business growth, making them an optimal choice for impactful advertising.
                    </p>
                </div>
            </button>
            <button
                className={`flex flex-col justify-center items-center w-full md:w-1/3 h-50 px-2 border-2 border-slate-400 rounded-lg ${selectedType === 'Non-Skippable Ads' ? 'border-green-500 bg-gray-200' : 'opacity-60'}`}
                onClick={() => handleAdTypeChange('Non-Skippable Ads')}>
                <h2 className='p-2' style={{ fontSize: 14,fontWeight:800  }}>Non-skippable Ads</h2>
                <div className='flex flex-row justify-center items-center'>
                    <img src={NonSkipAbleAD} alt='non - skipable ad' className='w-16 h-16 self-start opacity-70' />
                    <p style={{ fontSize: 12 }} className='bg-warning p-1 rounded-md bg-opacity-20 text-justify text-warning'>
                        These ads are placed after high engagement ads, they are also non-skippable, delivering the same set of ads but with slightly less impact due to reduced visibility. Nonetheless, they still maintain good engagement and drive effective results.
                    </p>
                </div>
            </button>
            <button
                className={`flex flex-col justify-center items-center w-full md:w-1/3 h-50 px-2 border-2 border-slate-400 rounded-lg ${selectedType === 'Skippable engaging ads' ? 'border-green-500 bg-gray-200' : 'opacity-60'}`}
                onClick={() => handleAdTypeChange('Skippable engaging ads')}>
                <h2 className='p-2' style={{ fontSize: 14,fontWeight:800  }}>Skippable engaging ads</h2>
                <div className='flex flex-row justify-center items-center'>
                    <img src={SkipAbleAD} alt='skipable ad' className='w-16 h-16 self-start opacity-70' />
                    <p style={{ fontSize: 12 }} className='bg-warning p-1 rounded-md bg-opacity-20 text-justify text-warning'>
                        Placed at any time during the viewing experience, these ads are skippable and offer less engagement but drive visibility. They provide flexibility in ad placement while ensuring the audience is exposed to your brand.
                    </p>
                </div>
            </button>
        </div>
    );
};

export default Adcatagory;
