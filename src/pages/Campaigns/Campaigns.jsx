import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import TableOne from '../../components/Tables/TableOne';
import TableThree from '../../components/Tables/TableThree';
// import TableTwo from '../../components/Tables/TableTwo';
import DefaultLayout from '../../layout/DefaultLayout';

const Tables = () => {

  const Button = () => {
      <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
        Add New Campaign
    </button>
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Campaigns" button={Button}/>

      <div className="flex flex-col gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
