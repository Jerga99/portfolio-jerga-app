
import axios from 'axios';
import { useState } from 'react';

function createPortfolio(data) {
  return axios.post('/api/v1/portfolios', data);
}


export function useCreatePortfolio() {
  const [reqState, setReqState] = useState({
    error: null,
    data: null,
    loading: false
  });

  const createPortfolioHandler = async (...data) => {
    setReqState({error: null, data: null, loading: true});
    try {
      const json = await createPortfolio(...data);
      debugger
      setReqState({error: null, data: json.data, loading: false});
    } catch(e) {
      debugger
      const message = (e.response && e.response.message) || 'Ooops, something went wrong...';
      setReqState({error: message, data: null, loading: false});
    }
  }

  return [createPortfolioHandler, {...reqState}]
}
