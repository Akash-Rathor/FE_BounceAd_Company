import React from 'react'
import InputComponent from '../../common/InputComponent';

const CampaignName = ({ setValueCallback }) => {

    const valueChange = (value) => {
        setValueCallback(value);
    }

    const Icon = () => (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z" />
        </svg>
    )
    return (
        <div className="flex flex-col sm:flex-row w-full">
            <div className="w-full">
                {/* <label className="mb-3 block text-sm font-medium text-black dark:text-white"htmlFor="fullName">Campaign Name</label> */}
                <div className='min-w-44 maxt-w-80 w-72'>
                    <InputComponent getUpdatedValue={valueChange} placeholder='Campaign Name' Icon={<Icon />} />
                </div>
            </div>

        </div>
    )
}

export default CampaignName;