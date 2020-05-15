
import BaseApi from './BaseApi';

class BlogApi extends BaseApi {

  constructor(accessToken) {
    super(accessToken, '/blogs');
  }
}

export default BlogApi;
