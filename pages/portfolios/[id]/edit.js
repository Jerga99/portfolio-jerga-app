
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/actions/portfolios';
import PortfolioForm from '@/components/PortfolioForm';
import { Row, Col } from 'reactstrap';
import { useUpdatePortfolio} from '@/actions/portfolios';
import { toast } from 'react-toastify';

const PortfolioEdit = ({user}) => {
  const router = useRouter();
  const [ updatePortfolio, {error}] = useUpdatePortfolio();
  const { data: initialData } = useGetPortfolio(router.query.id);

  const _updatePortfolio = async (data) => {
    await updatePortfolio(router.query.id, data);
    toast.success('Portfolio has been updated!', {autoClose: 2000})
  }

  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">
            { initialData &&
              <PortfolioForm
                onSubmit={_updatePortfolio}
                initialData={initialData}
              />
            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}



export default withAuth(PortfolioEdit)('admin');
