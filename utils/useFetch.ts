import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError } from 'axios';

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function useFetch(url: string, query: string, page: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState<AxiosError>();
  const [list, setList] = useState<PostType[]>([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(url);
      await setList((prev: PostType[]) => prev && [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      setHasError(err as AxiosError);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
