
import axios from 'axios';
import { useApiHandler, fetcher } from 'actions';
import useSWR from 'swr';

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data);
const updatePortfolio = (id, data) => axios.patch(`/api/v1/portfolios/${id}`, data);
const deletePortfolio = (id) => axios.delete(`/api/v1/portfolios/${id}`);

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);
export const useDeletePortfolio = () => useApiHandler(deletePortfolio);

export const useGetPortfolio = (id) => {
  const { data, error, ...rest} = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest};
}
