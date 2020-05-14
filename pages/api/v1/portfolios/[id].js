
import PortfolioApi from '@/lib/api/portfolios';

export default async function handlePortfolio(req, res) {
  const json = await new PortfolioApi().getById(req.query.id);
  return res.json(json.data);
}
