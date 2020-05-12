
import axios from 'axios';

class PortfolioApi {

  getAll() {
    return axios.get('http://localhost:3001/api/v1/portfolios')
  }

  getById(id) {
    return axios.get(`http://localhost:3001/api/v1/portfolios/${id}`)
  }
}

export default PortfolioApi;
