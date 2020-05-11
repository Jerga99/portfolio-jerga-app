
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({to, ssr}) => {
  const router = useRouter();

  useEffect(() => {
    if (ssr) {
      window.location.pathname = to;
    } else {
      router.push(to);
    }
  }, [])

  return null;
}

export default Redirect;
