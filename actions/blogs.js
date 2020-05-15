
import axios from 'axios';
import { useApiHandler } from 'actions';

const createBlog = data => axios.post('/api/v1/blogs', data);

export const useCreateBlog = () => useApiHandler(createBlog);
