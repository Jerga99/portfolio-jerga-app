
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolio = ({portfolio}) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  // TODO: Provide proper stylings!!!
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        title={`${portfolio.title} - Filip Jerga`}
        header="Portfolio Detail">
        {
          JSON.stringify(portfolio)
        }
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio._id}
    }
  })

  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: {portfolio}};
}

export default Portfolio;
