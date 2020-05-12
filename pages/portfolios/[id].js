
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolio = ({portfolio}) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage header="Portfolio Detail">
        {
          JSON.stringify(portfolio)
        }
      </BasePage>
    </BaseLayout>
  )
}

export async function getServerSideProps({query}) {
  const json = await new PortfolioApi().getById(query.id);
  const portfolio = json.data;

  return {props: { portfolio }};
}

export default Portfolio;
