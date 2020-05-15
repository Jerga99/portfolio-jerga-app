import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link'

<BaseLayout navClass="transparent" user={user} loading={false}>
  {/* MASTHEAD */}
  <div className="masthead" style={{"backgroundImage": `url(/images/home-bg.jpg)`}}>
    <div className="overlay"></div>
    <Container>
      <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>Blogs Dashboard</h1>
            <span className="subheading">
              Let's write some nice blog today{' '}
                <Link href='/blogs/new'>
                <Button color="primary">Create a new Blog</Button>
              </Link></span>
          </div>
        </div>
      </Row>
    </Container>
  </div>
  {/* MASTHEAD */}
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
