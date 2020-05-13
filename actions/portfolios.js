
import axios from 'axios';

export function createPortfolio(data) {
  return axios.post('/api/v1/portfolios', data);
}
