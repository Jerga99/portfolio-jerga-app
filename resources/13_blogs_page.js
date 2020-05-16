<BaseLayout
  navClass="transparent" className="blog-listing-page"
  user={null} loading={false}>
  <div className="masthead" style={{"backgroundImage": "url('/images/home-bg.jpg')"}}>
    <div className="overlay"></div>
    <Container>
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>Fresh Blogs</h1>
            <span className="subheading">Programming, travelling...</span>
          </div>
        </div>
      </div>
    </Container>
  </div>
  <BasePage
    className="blog-body">
    <Row>
      <Col md="10" lg="8" className="mx-auto">
        <div>
          <div className="post-preview clickable">
            <Link href="#">
              <a>
                <h2 className="post-title">
                  Some Title
                </h2>
                <h3 className="post-subtitle">
                  Some Subtitle
                </h3>
              </a>
            </Link>
            <p className="post-meta">Posted by
              <a href="#"> Filip Jerga </a>
              - 11/11/2011
            </p>
          </div>
          <hr></hr>
        </div>
      </Col>
      <Col md="10" lg="8" className="mx-auto">
        <div>
          <div className="post-preview clickable">
            <Link href="#">
              <a>
                <h2 className="post-title">
                  Some Title
                </h2>
                <h3 className="post-subtitle">
                  Some Subtitle
                </h3>
              </a>
            </Link>
            <p className="post-meta">Posted by
              <a href="#"> Filip Jerga </a>
              - 11/11/2011
            </p>
          </div>
          <hr></hr>
        </div>
      </Col>
    </Row>
  </BasePage>
</BaseLayout>
