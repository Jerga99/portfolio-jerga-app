
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

  create(data) {
    return axios.post(this.apiUrl, data, this.config);
  }
}

export default BlogApi;
