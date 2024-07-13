import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import BillingTable from '../../components/Tables/BillingTable';

const BillingHistory = () => {

    const billings = [
        {
            id: 1, campaign_name: 'Amazon sales', amount: '35000', billed_on_date: '20/06/2024 13:34', status: 'Paid'
        },
        {
            id: 2, campaign_name: 'Flipkart sales', amount: '239000', billed_on_date: '17/03/2024 23:14', status: 'Refunded'
        },
        {
            id: 3, campaign_name: 'Nyka sales', amount: '45005', billed_on_date: '12/12/2023 19:40', status: 'Failed'
        },
    ];

    const noBillingHistoryComponent = () => {
        return <div className='flex absolute justify-center items-center left-1/2 top-1/2'>
            <h1 className='text-3xl font-bold self-center'>No payment history</h1>
        </div>
    }

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Billing History" />
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Camapaign name
                                </th>
                                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                    Amount
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Paid on
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Payment Status
                                </th>
                                {/* <th className="py-4 px-4 font-medium text-black dark:text-white">
                                    Download Receipt
                                </th> */}
                            </tr>
                        </thead>

                        <tbody>
                            {billings && <BillingTable billings={billings} />}

                            {(!billings || billings.length === 0) && noBillingHistoryComponent()}

                        </tbody>
                        <div className='flex items-center lg:absolute mt-5 lg:right-10 justify-evenly space-x-5'>
                            <button type="button" className="flex w-32 justify-evenly items-center origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-10"
                                onClick={() => { }}>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                                </svg>
                                Previous


                            </button>
                            <button type="button" className="flex w-32 justify-evenly items-center origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-10"
                                onClick={() => { }}>
                                Next
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg>

                            </button>
                        </div>
                    </table>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default BillingHistory