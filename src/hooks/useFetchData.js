import { useEffect, useState } from "react";

export const useFetchData = (fetchURL) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(fetchURL, {
          signal: abortController.signal,
        });
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status}`);
        }
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError("Could not load any Data");
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [fetchURL]);
  return { fetchData, loading, error };
};
