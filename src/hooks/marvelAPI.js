import { useCallback } from "react";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();

  const fetchComics = useCallback(async () => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/comics?${query}`
    );

    const results = await response.json();
    return results;
  }, [query]);

  return { fetchComics };
};

export default useAPI;
