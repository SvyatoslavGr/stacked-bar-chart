import { useState, useEffect } from 'react';

const useFetch = (urls) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const promisesArr = urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    });

    Promise.all(promisesArr)
      .then((responses) => {
        setData(responses);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [urls]);

  return { data, isLoading };
};

export default useFetch;
