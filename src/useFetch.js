import { useState, useEffect } from 'react';

const useFetch = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        let options = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        };

        if (body) {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Could not fetch the data');
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsPending(false);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => abortCont.abort();
  }, [url, method, body]);

  return { data, isPending, error };
};

export default useFetch;


