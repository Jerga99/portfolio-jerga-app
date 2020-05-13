
import axios from 'axios';
import { useApiHandler } from '@/actions';

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data);

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
