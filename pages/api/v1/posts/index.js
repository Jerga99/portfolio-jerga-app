

import { data } from '@/data';

function handlePosts (req, res) {
  res.status(200).json(data);
}

export default handlePosts;
