
import axios from 'axios';

class BlogApi {

  constructor(accessToken) {
    this.config = {}

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`
      }
    }

    this.apiUrl = process.env.PORTFOLIO_API_URL + '/blogs';
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  create(data) {
    return axios.post(this.apiUrl, data, this.config);
  }
}

export default BlogApi;
