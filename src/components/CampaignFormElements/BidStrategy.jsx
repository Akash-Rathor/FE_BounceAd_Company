import React, { useEffect, useState } from 'react'

const BidStrategy = ({ setBidStrategy, adFormat }) => {

    const [showPopup, setShowPopup] = useState(false);
    const [strategy, setStrategy] = useState('');
    const [strategyMsg, setStrategyMsg] = useState('');
    const [description, setDescription] = useState('');

    const handleMouseEnter = () => {
        setShowPopup(true);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        if (adFormat === 'Inside Cab Video Ads') {
            setBidStrategy('Maximum CPV');
            setStrategy('Maximum CPV');
            setStrategyMsg('With Maximum CPV (cost-per-view), you set the most you’re willing to pay each time your ad is viewed.You can create skippable in-stream or non-skipable in-stream video ads with this bid strategy.')
            setDescription(`If you think it's worth ₹1.50 to have someone watch your video, you can set ₹1.50 as your max CPV bid. This means:
                    For an in-stream skippable/non-skippable ad, you'll pay a maximum of ₹1.50  when someone watches 30 seconds of your video (or the duration if it's shorter than 30 seconds) or engages with an interactive element, whichever comes first. Interactive elements include call-to-action.
                    For an in stream skippable ad you'll only be charged for the portion of the ad watched by the user before pressing skip button, for example you video is of 30 seconds and view rate is ₹1.50 and user skiped ad after 5 second then you will only be charged for ₹0.25`);
        } else if (['Outside Cab Print Ads', 'Seat Back Laminated Branding'].includes(adFormat)) {
            setBidStrategy('Minimum Count');
            setStrategy('Minimum Count');
            setStrategyMsg('With Mimumum count you set the minimum number of Places / vehicles / months  you are wiling to show your ads, you can create Ads for minimum of 1 month for these type of Ads.')
            setDescription(`This means that to calculate the total charges for your campaign, you need to:
                            Determine the number of places or vehicles where your ads will be displayed.
                            Multiply this number by the number of months you want the campaign to run.
                            Multiply the result by the charges per month.
                            Additionally, you have the option to increase the campaign duration by increments of one month to adjust the total charges.`);
        } else {
            setBidStrategy('src/components/campaignformelements/bidstrategy');
            setStrategy('src/components/campaignformelements/bidstrategy');
            setStrategyMsg('Not enabled at this moment')
            setDescription('Not enabled at this moment');

        }
    }, [adFormat, setBidStrategy, setStrategy]);



    return (
        <>
            <div className='flex flex-col justify-center items-start m-5'>

                <div className='flex flex-col space-y-5'>
                    <p> Your default bid stretagy is <strong>{strategy}</strong></p>
                    <p style={{ fontSize: 12 }} className='text-slate-500 '>{strategyMsg}</p>
                </div>


            </div>
            <div className='group relative inline-block left-0'>

                <button className='text-blue-300' style={{ fontSize: 16 }} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>See how it works</button>

                {showPopup && <p className='text-slate-600 bg-slate-300 p-2 rounded-lg bg-opacity-30 opacity-70' style={{ fontSize: 12 }}>{description}</p>}
            </div>
        </>
    )
}

export default BidStrategy