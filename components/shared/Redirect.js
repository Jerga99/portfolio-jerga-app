
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({to}) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [])

  return null;
}

export default Redirect;
