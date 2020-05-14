
import axios from 'axios';

class PortfolioApi {

  constructor(accessToken) {
    this.config = {}

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`
      }
    }

    this.apiUrl = process.env.PORTFOLIO_API_URL + '/portfolios';
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  getAll() {
    return axios.get(this.apiUrl)
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`)
  }

  createPortfolio(data) {
    return axios.post(this.apiUrl, data, this.config);
  }

  update(id, data) {
    return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
  }
}

export default PortfolioApi;
