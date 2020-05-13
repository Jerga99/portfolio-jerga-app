

import PortfolioApi from '@/lib/api/portfolios';
import auth0 from '@/utils/auth0';

export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const json = await new PortfolioApi(accessToken).createPortfolio(req.body);
    return res.json(json.data);
  } catch(e) {
    return res.status(e.status || 400).end(e.message);
  }
}
