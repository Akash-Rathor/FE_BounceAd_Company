import React from 'react'

const ImpressionValue = ({ budgeError }) => {
    return (
        <div>
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700 space-x-2">
                <span style={{ fontSize: 12, color: 'green' }}>Based on your campaign settings but not your budget or bid </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700 space-x-2">
                <span className="font-normal text-gray-800 dark:text-gray-200">Impressions </span>
                <span className="font-normal text-gray-800 dark:text-gray-200">30M </span>
            </div>
            <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700 space-x-2">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667" />
                </svg>
                <h4 className="py-2 font-normal tracking-wide text-blue-800 text-center text-gray-800 uppercase dark:text-white">Your estimated performance</h4>
            </div>
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700 space-x-2">
                <div className='flex flex-col justify-between items-start space-y-5'>
                    <div className='flex flex-col justify-center items-start'>
                        <h3 className='text-sm'>Views</h3>
                        <h3>1k - 4k</h3>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h3 className='text-sm'>Average CPV</h3>
                        <div className='flex flex-row justify-center items-center'>
                            <span>₹ 0.25</span>
                            <span className='px-1'> - </span>
                            <span> ₹ 0.65</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-start space-y-5'>
                    <div className='flex flex-col justify-center items-start'>
                        <h3 className='text-sm'>Impressions</h3>
                        <h3>3k - 3.5k</h3>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h3 className='text-sm'>Budget Spend</h3>
                        <div className='flex flex-row justify-center items-center'>
                            <span>95% - 100%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImpressionValue