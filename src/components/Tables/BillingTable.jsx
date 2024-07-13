

const CampaignList = ({ billings }) => {

    return (billings.map((billings, key) => (
        <tr key={key}>
            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-bold text-black dark:text-white">
                    {billings.campaign_name}
                </h5>
            </td>
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                    {billings.amount}
                </p>
            </td>
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                    {billings.billed_on_date}
                </p>
            </td>
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium 
                        ${billings.status==='Paid' ? "bg-success text-success" : billings.status === 'Refunded' ? "bg-warning text-warning" : "bg-meta-1 text-meta-1"}`}>
                    {billings.status}
                </p>
            </td>
            {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <button className="flex items-center space-x-3.5">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                    </svg>

                    <p>Download</p>
                </button>
            </td> */}
        </tr>
    )))
};

export default CampaignList;
