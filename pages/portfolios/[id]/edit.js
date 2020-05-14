
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/actions/portfolios'

const PortfolioEdit = ({user}) => {
  const router = useRouter();
  const { data } = useGetPortfolio(router.query.id);
  debugger
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Edit">

      </BasePage>
    </BaseLayout>
  )
}



export default withAuth(PortfolioEdit)('admin');
