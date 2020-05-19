
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { formatDate } from 'helpers/functions';
import PortfolioApi from '@/lib/api/portfolios';
import { userRouter, useRouter } from 'next/router';

const Portfolio = ({portfolio}) => {
  const { data: dataU, loading: loadingU } = useGetUser();
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Your page is getting server</h1>
  }

  return (
    <BaseLayout
      navClass="transparent"
      user={dataU} loading={loadingU}>
      <BasePage
        noWrapper
        indexPage
        title={`${portfolio.title} - Filip Jerga`}
        metaDescription={portfolio.description}>
        <div className="portfolio-detail">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
              { router.isFallback &&
                <h1 className="cover-heading">Your page is getting served...</h1>
              }
              { !router.isFallback &&
                <>
                  <h1 className="cover-heading">{portfolio.title}</h1>
                  <p className="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
                  <p className="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
                  <p className="lead">{portfolio.description}</p>
                  <p className="lead">
                    <a href={portfolio.companyWebsite} target="_" class="btn btn-lg btn-secondary">Visit Company</a>
                  </p>
                </>
              }
            </main>
          </div>
        </div>
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

  return { paths, fallback: true };
}

export async function getStaticProps({params}) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: {portfolio}, unstable_revalidate: 1};
}

export default Portfolio;
