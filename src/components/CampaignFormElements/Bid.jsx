import React,{useState,useEffect} from 'react'
import InputComponent from '../../common/InputComponent'

const Bid = ({setBid,adType}) => {

  const [edit,setEdit] = useState(true);
  const [isCorrect,setIsCorrect] = useState(false)
  const [bidded,setBidded] = useState(0);
  const [error,setError] = useState('');

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const updateUpdateBid = (val) => {
    setBidded(val);
  };

const handleMouseLeave = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if(isCorrect){
      setBid(bidded);
    }else{
      setBid('');
    }
  },[isCorrect,bidded,setBid])


  const [showPopup, setShowPopup] = useState(false);
  const Icon = () =>(
    '₹'
  )

  useEffect(() => {
    console.log('bidded,',bidded)
    if((adType!=='High Engagement Non-Skippable' && parseFloat(bidded)<0.25) || !bidded){
      setIsCorrect(false);
      setError('Bid amount can not be less than ₹0.25')
    }else{
      setError('');
      setIsCorrect(true);
    }
  },[bidded,adType,setBid])
  


  return (
    <div className='flex flex-col justify-start items-start space-y-2'>
      <p className='m-5'>Target CPV Bid</p>
      {error &&<p className='bg-red-500 bg-opacity-30 text-red-800 px-1 rounded-md'>{error}</p>}
      <div className={!isCorrect ? `ring-1 ring-red-800 rounded-md p-1` : null}>
        <InputComponent getUpdatedValue={updateUpdateBid} placeholder='2.5' Icon={<Icon />} editable={edit}/>
      </div>
      <button className='text-blue-300' onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>See details</button>
      {showPopup && <p className='text-slate-600 bg-slate-300 p-2 rounded-lg bg-opacity-30 opacity-70' style={{ fontSize: 12 }}>With Target CPV (cost-per-view), 
        you set the average amount you're willing to pay for views for this campaign. From the Target CPV you set, we'll optimize bids to help get as many views as possible.
        Some views may cost more or less than your target.
        </p> }
    </div>
  )
}

export default Bid