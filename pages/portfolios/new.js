



import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';
import { createPortfolio } from '@/actions/portfolios';

const PortfolioNew = ({user, loading: userLoading}) => {

  const _createPortfolio = (data) => {
    createPortfolio(data)
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={_createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioNew)('admin');
