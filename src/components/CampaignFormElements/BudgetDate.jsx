import React, { useEffect, useState } from 'react'
import Dropdown from '../../common/DropDown';
import InputComponent from '../../common/InputComponent';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

const dataset = [
    { value: 'Daily' },
    { value: 'Campaign Total' }
]

const BudgetDate = ({ setBudgetAndDates }) => {
    
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [data, setData] = useState({
        startDate:startDate,endDate:endDate , budgetType:''
    });
    const [message, setMessage] = useState('');

    const setBudgetType = (val) => {
        console.log('val', val)
        if (val.toLowerCase().includes('daily')) {
            setMessage("For the selected time period, you won't pay more than your daily budget times the average number of days in a your selected time period. Some days you might spend less than your daily budget, and on others you might spend up to twice as much");
        } else {
            setMessage('Campaign total budget represents your total spend for the duration of the campaign');
        }
        setData(prev => ({
            ...prev,
            budgetType: val
        }));
    };

    const handleDateChange = (date) => {
        const formattedDate = format(date, 'dd/MM/yyyy');
        return formattedDate;
        
      };

    const setDates = (type,val) => {
        console.log('val',val)
        if(type==='endDate'){
            setEndDate(val)
            setData(prev => ({
                ...prev,
                endDate: handleDateChange(val)
            }))
        }else{
            setStartDate(val)
            setData(prev => ({
                ...prev,
                startDate: handleDateChange(val)
            }))
        }
    }

    const setAmount = (val) => {
        console.log('val', val)
        setData(prev => ({
            ...prev,
            amount: val
        }));
    }

    const Icon = () => (
        'Rs'
    )

    useEffect(() => {
        console.log('data', data)
        setBudgetAndDates(data);
    }, [data])

    return (
        <div className='flex flex-col justify-evenly items-start space-y-5'>
            <div className='flex flex-row justify-evenly items-start '>
                <div className='flex flex-col justify-center items-start w-2/3 left-0'>

                    <div className='flex flex-col justify-center items-start'>
                        <p className='p-2'> Select budget type and amount </p>
                        <div className='flex flex-row justify-center items-center space-x-2'>
                            <Dropdown title='Budget Type' dataset={dataset} selectFunction={setBudgetType} />
                            <InputComponent getUpdatedValue={setAmount} placeholder='Amount' Icon={<Icon />} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start mt-20'>
                        <p className='p-2-mt-10'> Select start and end date </p>
                        <div className='flex flex-row justify-center items-center gap-4'>
                            <p className='font-semibold'>Start Date </p>
                            <DatePicker
                            selected={startDate}
                            className='p-2 rounded-md border-2 border-slate-300 w-36'
                            placeholderText='DD/MM/YYYY'
                            dateFormat='dd/MM/yyyy'
                            onChange={(date) => setDates('startDate',date)}
                            showPreviousMonths={false}
                            />
                            <p className='font-semibold'>End Date </p>
                            <DatePicker
                            selected={endDate}
                            className='p-2 rounded-md border-2 border-slate-300 w-36'
                            placeholderText='DD/MM/YYYY'
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => setDates('endDate',date)}
                            showPreviousMonths={false}
                            />
                        </div>
                    </div>

                </div>

                {message && <div className='flex flex-row justify-right items-right text-justify w-1/3 right-5 top-2 bg-warning p-2 bg-opacity-10 rounded-lg opacity-70'>
                    <svg class="absolute w-5 h-5 text-gray-800 text-warning  dark:text-white m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd" />
                    </svg>
                    <p className='mt-8 text-warning'>{message}</p>
                </div>}
            </div>
        </div>
    )
}

export default BudgetDate;