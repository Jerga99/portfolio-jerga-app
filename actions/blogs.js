
import axios from 'axios';
import { useApiHandler, fetcher } from 'actions';
import useSWR from 'swr';

const createBlog = data => axios.post('/api/v1/blogs', data);
const updateBlog = (id, data) => axios.patch(`/api/v1/blogs/${id}`, data);

export const useCreateBlog = () => useApiHandler(createBlog);
export const useUpdateBlog = () => useApiHandler(updateBlog);

export const useGetBlog = id => {
  const { data, error, ...rest} = useSWR(id ? `/api/v1/blogs/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest};
}

export const useGetUserBlogs = () => {
  const { data, error, ...rest} = useSWR(`/api/v1/blogs/me`, fetcher);
  return { data, error, loading: !data && !error, ...rest};
}

