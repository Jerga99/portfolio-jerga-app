
import axios from 'axios';

class PortfolioApi {

  constructor() {
    this.apiUrl = process.env.PORTFOLIO_API_URL + '/portfolios';
  }

  getAll() {
    return axios.get(this.apiUrl)
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`)
  }

  createPortfolio(data) {
    return axios.post(this.apiUrl, data);
  }
}

export default PortfolioApi;
