
import { useState } from 'react';

export const fetcher = (url) =>
  fetch(url).then(async res => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export function useApiHandler(apiCall) {
  const [reqState, setReqState] = useState({
    error: null,
    data: null,
    loading: false
  });

  const handler = async (...data) => {
    setReqState({error: null, data: null, loading: true});
    try {
      const json = await apiCall(...data);
      setReqState({error: null, data: json.data, loading: false});
    } catch(e) {
      const message = (e.response && e.response.message) || 'Ooops, something went wrong...';
      setReqState({error: message, data: null, loading: false});
    }
  }

  return [handler, {...reqState}]
}

