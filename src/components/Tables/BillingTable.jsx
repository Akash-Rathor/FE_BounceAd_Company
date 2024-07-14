

const BillingTable = ({ billings }) => {

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
        </tr>
    )))
};

export default BillingTable;
