
import { Container } from 'reactstrap';
import Head from 'next/head';

const BasePage = props => {
  const {
    className = '',
    header,
    title = "Portfolio - Filip Jerga",
    children } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
      </Head>
      <div className={`base-page ${className}`}>
        <Container>
          { header &&
            <div className="page-header">
              <h1 className="page-header-title">{header}</h1>
            </div>
          }
          {children}
        </Container>
      </div>
    </>
  )
}

export default BasePage;
