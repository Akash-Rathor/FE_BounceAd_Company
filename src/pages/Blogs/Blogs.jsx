import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import TableOne from '../../components/Tables/TableOne';
import CampaignList from '../../components/Tables/CampaignList';
// import TableTwo from '../../components/Tables/TableTwo';
import DefaultLayout from '../../layout/DefaultLayout';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Campaigns" />

      <div className="flex flex-col gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <CampaignList />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
