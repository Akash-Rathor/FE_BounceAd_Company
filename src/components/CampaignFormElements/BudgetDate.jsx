import React, { useEffect, useState } from 'react';
import Dropdown from '../../common/DropDown';
import InputComponent from '../../common/InputComponent';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

const dataset = [
  { value: 'Daily' },
  { value: 'Campaign Total' }
];

const monthDataset = Array.from({ length: 12 }, (_, i) => ({ value: (i + 1).toString() }));

const BudgetDate = ({ setBudgetAndDates, bidStrategy }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [dropdownTitle, setDropdownTitle] = useState('Budget Type');
  const [data, setData] = useState({
    startDate: '',
    endDate: '',
    budgetType: '',
    days: 0,
    dailyBudget: 0,
    amount: 0,
    months: 1,
    cabs: 100
  });
  const [message, setMessage] = useState('');
  const [budgetMessage, setBudgetMessage] = useState('');
  const [minDays,setMinDays] = useState(10);


  
  useEffect(() => {
    if (bidStrategy === 'Maximum CPV') {
      setDropdownTitle('Budget Type');
      setMinDays(10);
    } else if (bidStrategy === 'Minimum Count') {
      setDropdownTitle('Number of Months');
      setMinDays(31);
    }
    setData({
      startDate: '',
      endDate: '',
      budgetType: '',
      days: 0,
      dailyBudget: 0,
      amount: 0,
      months: 1,
      cabs: 100
    });
  }, [bidStrategy]);

  const setBudgetType = (val) => {
    setData(prev => ({
      ...prev,
      budgetType: val
    }));
  };

  useEffect(() => {
    if (data.budgetType.toLowerCase().includes('daily')) {
      setMessage("For the selected time period, you won't pay more than your daily budget times the average number of days in your selected time period. Some days you might spend less than your daily budget, and on others you might spend up to twice as much.");
    } else if (data.budgetType.toLowerCase().includes('total')) {
      setMessage('Campaign total budget represents your total spend for the duration of the campaign');
    } else {
      setMessage(`Your campaign amount will be calculated based on the number of months you select and number of places/cabs you want your ad to be displayed.`);
    }
  }, [data.budgetType]);

  useEffect(() => {
    setData({
      startDate: '',
      endDate: '',
      budgetType: '',
      days: 0,
      dailyBudget: 0,
      amount: 0,
      months: 1,
      cabs: 100
    });
  }, [bidStrategy]);

  function parseDate(input) {
    const parts = input.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }


  useEffect(() => {
    if(data.cabs && data.months){
      const amt = 3500 * data.cabs *data.months
      setData(prev => ({
        ...prev,
        amount: amt
      }));
    }
  },[data.cabs,data.months])

  useEffect(() => {
    function daysBetween(date1, date2) {
      const startDate = parseDate(date1);
      const endDate = parseDate(date2);
      const timeDifference = Math.abs(endDate - startDate);
      const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return dayDifference;
    }

    if (data.startDate && data.endDate && data.budgetType) {
      const days = daysBetween(data.startDate, data.endDate);
      const budget = parseFloat(data.amount);
      const dailyBudget = (budget / days).toFixed(2);
      setData(prev => ({
        ...prev,
        days: days,
        dailyBudget: dailyBudget
      }));

      if (data.budgetType.toLowerCase().includes('total')) {
        setBudgetMessage(`A ₹${budget} campaign total amount is similar to a ₹${dailyBudget} daily budget amount that runs for ${days} days.`);
      } else if (data.budgetType.toLowerCase().includes('daily')) {
        setBudgetMessage(`For the ${days} days, you won't pay more than your daily budget times the average number of days in a month. Some days you might spend less than your daily budget, and on others you might spend up to twice as much.`);
      }
      else{
        setBudgetMessage('');
      }
    }
  }, [data.startDate, data.endDate, data.budgetType, data.amount]);

  const handleDateChange = (date) => {
    const formattedDate = format(date, 'dd/MM/yyyy');
    return formattedDate;
  };

  const setDates = (type, val) => {
    if (type === 'endDate') {
      if (startDate && new Date(val) < new Date(startDate)) {
        setError('End date cannot be earlier than start date');
        return;
      } else {
        setError('');
      }
      setEndDate(val);
      setData(prev => ({
        ...prev,
        endDate: handleDateChange(val)
      }));
    } else {
      if (endDate && new Date(val) > new Date(endDate)) {
        setError('Start date cannot be later than end date');
        return;
      } else {
        setError('');
      }
      setStartDate(val);
      setData(prev => ({
        ...prev,
        startDate: handleDateChange(val)
      }));
    }
  };

  useEffect(() => {
    if (data.cabs < 100) {
      setError('Minimum number Cabs / Places should be 100');
    } else if (data.cabs > 1000) {
      setError('Maximum number Cabs / Places should be less than 1000');
    } else {
      setError('');
    }
  }, [data.cabs]);

  const setAmount = (val) => {
    setData(prev => ({
      ...prev,
      amount: val
    }));
  };

  const setMonths = (val) => {
    setData(prev => ({
      ...prev,
      months: val
    }));
  };

  const setCabs = (val) => {
    setData(prev => ({
      ...prev,
      cabs: val
    }));
  };

  const Icon = () => '₹';

  useEffect(() => {
    setBudgetAndDates(data);
  }, [data, setBudgetAndDates]);

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-start items-start space-y-5'>
        <div className='flex flex-col lg:flex-row justify-start items-start flex-wrap'>
          {bidStrategy === 'Maximum CPV' ? (
            <div className='flex flex-col justify-center items-start lg:w-2/3 md:w-2/3 left-0'>
              <p className='p-2'>Select budget type and amount</p>
              <div className='flex flex-col lg:flex-row justify-center items-start'>
                <div className='flex flex-row justify-center items-center space-x-2'>
                  <Dropdown title={dropdownTitle} dataset={dataset} selectFunction={setBudgetType} />
                  <InputComponent getUpdatedValue={setAmount} placeholder='Amount' Icon={<Icon />} />
                </div>
              </div>
              <div className='flex flex-col justify-center items-start mt-20'>
                <p className='p-2-mt-10'>Select start and end date</p>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                  <p className='font-semibold'>Start Date</p>
                  <DatePicker
                    selected={startDate}
                    className='p-2 rounded-md border-2 border-slate-300 w-36'
                    placeholderText='DD/MM/YYYY'
                    dateFormat='dd/MM/yyyy'
                    onChange={(date) => setDates('startDate', date)}
                    showPreviousMonths={false}
                    minDate={new Date()}
                  />
                  <p className='font-semibold'>End Date</p>
                  <DatePicker
                    selected={endDate}
                    className='p-2 rounded-md border-2 border-slate-300 w-36'
                    placeholderText='DD/MM/YYYY'
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setDates('endDate', date)}
                    showPreviousMonths={false}
                    minDate={startDate ? new Date(startDate.getTime() + minDays * 86400000) : new Date()}
                  />
                </div>
                  {budgetMessage && <p style={{ fontSize: 12 }} className='p-2 bg-green-500 bg-opacity-30 text-green-900 rounded-md mt-5'>{budgetMessage}</p>}
              </div>
            </div>
          ) : (
            <div className='flex flex-col justify-center items-start lg:w-2/3 md:w-2/3 left-0'>
              <div className='flex flex-col justify-center items-start'>
                <p className='p-2'>Select number of months and total cabs</p>
                <div className='flex flex-row justify-center items-center space-x-2 '>
                  <Dropdown title={dropdownTitle} dataset={monthDataset} selectFunction={setMonths}/>
                  <InputComponent getUpdatedValue={setCabs} placeholder='Total Cabs / Places'/>
                </div>
              </div>
              <div className='flex flex-col justify-center items-start mt-20'>
                <p className='p-2-mt-10'>Select start date</p>
                <div className='flex flex-row justify-center items-center gap-4'>
                  <p className='font-semibold'>Start Date</p>
                  <DatePicker
                    selected={startDate}
                    className='p-2 rounded-md border-2 border-slate-300 w-36'
                    placeholderText='DD/MM/YYYY'
                    dateFormat='dd/MM/yyyy'
                    onChange={(date) => setDates('startDate', date)}
                    showPreviousMonths={false}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {message && (
          <div className='flex flex-row justify-right items-right text-justify lg:w-1/3 md:w-1/3 right-5 top-2 bg-warning p-2 bg-opacity-10 rounded-lg opacity-70'>
            <svg className="absolute w-5 h-5 text-gray-800 text-warning dark:text-white m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
            </svg>
            <p className='mt-8 text-warning'>{message}</p>
          </div>
        )}
      </div>
      {error && <div className='mt-10 mb-5 bg-red-500 bg-opacity-20 px-2 py-1 rounded-md'>
        <h2 className='text-red-900'>{error}</h2>
      </div>}
    </>
  );
};

export default BudgetDate;
