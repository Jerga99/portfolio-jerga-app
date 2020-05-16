
import axios from 'axios';
import BaseApi from './BaseApi';

class PortfolioApi extends BaseApi {

  constructor(accessToken) {
    super(accessToken, '/portfolios');
  }

  delete(id) {
    return axios.delete(`${this.apiUrl}/${id}`, this.config);
  }
}

export default PortfolioApi;
