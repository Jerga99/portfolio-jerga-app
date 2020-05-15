
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Row, Col } from 'reactstrap';
import Masthead from 'components/shared/Masthead';

const Dashboard = ({user, loading}) => {
  return (
    <BaseLayout navClass="transparent" user={user} loading={false}>
      <Masthead imagePath="/images/home-bg.jpg" />
      <BasePage className="blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Dashboard)('admin');
