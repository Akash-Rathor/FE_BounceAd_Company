import React,{useState} from 'react'
import InputComponent from '../../common/InputComponent'

const Bid = ({setBid}) => {

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const [showPopup, setShowPopup] = useState(false);
  const Icon = () =>(
    '₹'
  )
  return (
    <div className='flex flex-col justify-start items-start space-y-2'>
      <p className='m-5'>Target CPV Bid</p>
      <InputComponent getUpdatedValue={setBid} placeholder='2.5' Icon={<Icon />}/>
      <button className='text-blue-300' onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>See details</button>
      {showPopup && <p className='text-slate-600 bg-slate-300 p-2 rounded-lg bg-opacity-30 opacity-70' style={{ fontSize: 12 }}>With Target CPV (cost-per-view), 
        you set the average amount you're willing to pay for views for this campaign. From the Target CPV you set, we'll optimize bids to help get as many views as possible.
        Some views may cost more or less than your target.
        </p> }
    </div>
  )
}

export default Bid