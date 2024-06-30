import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableThree from '../../components/Tables/TableThree';
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
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Campaigns;
