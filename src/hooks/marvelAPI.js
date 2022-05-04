import { useCallback } from "react";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();

  const loadComicsAPI = useCallback(
    async (title = "superman") => {
      try {
        const response = await fetch(
          `http://gateway.marvel.com/v1/public/comics?${
            title ? `title=${title}&` : ""
          }limit=20&${query}`
        );

        const results = await response.json();

        return results;
      } catch (error) {
        return error.message;
      }
    },
    [query]
  );

  return { loadComicsAPI };
};

export default useAPI;
