import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import CampaignList from '../../components/Tables/CampaignList';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link, useNavigate } from 'react-router-dom';

const Campaigns = () => {

  const navigate = useNavigate();
  
  const redirectToAddNew = () => {
    navigate('/campaign/new')
  }



  const Button = () => (
    <button className="rounded bg-white py-3 px-3 text-xs items-center justify-center font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
    onClick = {redirectToAddNew}>
      Add New Campaign
    </button>
  );

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Campaigns" Button={Button} />

      <div className="flex flex-col gap-10">
        <CampaignList packageData={packageData}/>
      </div>
    </DefaultLayout>
  );
};

export default Campaigns;



const packageData = [
  {
    id:1,
    name: "Amazon Big Billion days",
    views: 350001,
    updatedOn: `Jan 13,2023`,
    running: true,
  },
  {
    id:2,
    name: "Flipkart sales",
    views: 400670,
    updatedOn: `Jan 13,2023`,
    running: true,
  },
  {
    id:3,
    name: "Nyka Sales",
    views: 2500457,
    updatedOn: `Jan 13,2023`,
    running: false,
  },
  {
    id:4,
    name: "Amazon Diwali Dhamaka",
    views: 3453578,
    updatedOn: `Jan 13,2023`,
    running: true,
  }
]