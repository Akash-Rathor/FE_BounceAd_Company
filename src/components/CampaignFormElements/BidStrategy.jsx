import React, { useState } from 'react'

const BidStrategy = ({setBidStrategy}) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleMouseEnter = () => {
        setShowPopup(true);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);
    };

    setBidStrategy('Maximum CPV');


    return (
        <>
            <div className='flex flex-col justify-between items-center m-5'>

                <div className='flex flex-col space-y-5'>
                    <p> Your default bid stretagy is <strong>Maximum CPV</strong></p>
                    <p style={{ fontSize: 12 }} className='text-slate-500'> With Maximum CPV (cost-per-view), you set the most you’re willing to pay each time your ad is viewed.
                        You can create skippable in-stream or non-skipable in-stream video ads with this bid strategy.</p>
                </div>


            </div>
            <div className='group relative inline-block left-0'>

                <button className='text-blue-300' style={{fontSize:16}} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>See how it works</button>

                {showPopup && <p className='text-slate-600 bg-slate-300 p-2 rounded-lg bg-opacity-30 opacity-70' style={{ fontSize: 12 }}>If you think it's worth ₹1.50 to have someone watch your video, you can set ₹1.50 as your max CPV bid. This means:
                    For an in-stream skippable/non-skippable ad, you'll pay a maximum of ₹1.50  when someone watches 30 seconds of your video (or the duration if it's shorter than 30 seconds) or engages with an interactive element, whichever comes first. Interactive elements include call-to-action.
                    For an in stream skippable ad you'll only be charged for the portion of the ad watched by the user before pressing skip button, for example you video is of 30 seconds and view rate is ₹1.50 and user skiped ad after 2 second then you will only be charged for ₹0.10
                </p>}
            </div>
        </>
    )
}

export default BidStrategy