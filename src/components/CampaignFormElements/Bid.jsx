import React,{useState,useEffect} from 'react'
import InputComponent from '../../common/InputComponent'

const Bid = ({setBid,adType , budgetAndDates}) => {

  const [edit,setEdit] = useState(true);
  const [isCorrect,setIsCorrect] = useState(false)
  const [bidded,setBidded] = useState(0);
  const [error,setError] = useState('');
  const [budgeError, setBudgetError] = useState('');
  const [minPrice,setMinPrice] = useState(null);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const updateUpdateBid = (minPrice) => {
    setBidded(minPrice);
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
  
  const calCulateExpectedBidPrice = (adType,budgetAndDates,amt, bidAmt) => {
    // console.log('adType,budgetAndDates,amt,bidAmt==',adType,budgetAndDates,amt,bidAmt)
    if (adType === 'Skippable engaging ads') {
      if (!budgetAndDates.budgetType.toLowerCase().includes('daily')) {
        if (amt < 5000 && bidAmt < 0.25) {
          setMinPrice(0.25);
        } else if (amt < 25000 && bidAmt < 0.25) {
          setMinPrice(0.25);
        } else if (amt < 30000 && bidAmt < 0.25) {
          setMinPrice(0.25);
        } else if (amt > 30000 && bidAmt < 0.25) {
          setMinPrice(0.25);
        }else{
          setMinPrice(null);
        }
      }
    }
    if (adType === 'Non-Skippable Ads') {
      if (!budgetAndDates.budgetType.toLowerCase().includes('daily')) {
        if (amt < 5000 && bidAmt < 0.25) {
          setMinPrice(0.25);
  
        } else if (amt < 25000 && bidAmt < 0.25) {
          setMinPrice(0.25);
  
        } else if (amt < 30000 && bidAmt < 0.25) {
          setMinPrice(0.25);
  
        } else if (amt > 30000 && bidAmt < 0.25) {
          setMinPrice(0.25);
  
        }else{
          setMinPrice(null);
        }
      }
    }
    if (adType === 'High Engagement Non-Skippable') {
      // if (!budgetAndDates.budgetType.toLowerCase().includes('daily')) {
        if (amt < 5000 && bidAmt < 25.13) {
          setMinPrice(25.13);
  
        } else if (amt < 25000 && bidAmt < 23.40) {
          setMinPrice(23.40);
  
        } else if (amt < 30000 && bidAmt < 22.22) {
          setMinPrice(22.22);
  
        } else if (amt > 30000 && bidAmt < 21.17) {
          setMinPrice(21.17);
  
        }
        else{
          setMinPrice(null);
        }
      // }
    }
  
    return null;
  }

  useEffect(() => {
    // console.log('adType,minPrice,bidded,budgetAndDates',adType,minPrice,bidded,budgetAndDates)
    if (!budgetAndDates.amount || budgetAndDates.amount === '') {
      setBudgetError('To check the detailed analysis of your Ad, please fill all the details');
    } else {
      // const amt = parseFloat(budgetAndDates.amount);
      const bidAmt = parseFloat(bidded);
      const dailyBudget = budgetAndDates.amount;
      calCulateExpectedBidPrice(adType,budgetAndDates,dailyBudget, bidAmt);
      if (minPrice !== null) {
        setBudgetError(`Your bid might be too low for your campaign settings. You can improve your campaign's potential reach and performance by adjusting your bid to ₹${minPrice}. Suggested based on your budget, campaign duration, targeting criteria, ad format, and estimated auction dynamics.`);
      } else {
        setBudgetError('');
      }
    }
  }, [bidded, budgetAndDates,adType,minPrice]);

  useEffect(() => {
    // console.log('bidded,',bidded)
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
      {budgeError &&
        <div className='flex flex-row justify-center items-center z-20 bg-red-600 bg-opacity-30 py-1 px-4'>
            <h1 className='text-sm text-red-600'>{budgeError}</h1>
        </div>}
      <button className='text-blue-300' onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>See details</button>
      {showPopup && <p className='text-slate-600 bg-slate-300 p-2 rounded-lg bg-opacity-30 opacity-70' style={{ fontSize: 12 }}>With Target CPV (cost-per-view), 
        you set the average amount you're willing to pay for views for this campaign. From the Target CPV you set, we'll optimize bids to help get as many views as possible.
        Some views may cost more or less than your target.
        </p> }
    </div>
  )
}

export default Bid;



